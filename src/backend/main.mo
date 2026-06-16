import Array "mo:core/Array";
import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Int "mo:core/Int";

import Migration "migration";


// New domain mixins
import EnrollmentApi "mixins/enrollment-api";
import ReviewsApi "mixins/reviews-api";
import EmailApi "mixins/email-api";
import ProgressApi "mixins/progress-api";
import AiProxyApi "mixins/ai-proxy-api";
import NotesApi "mixins/notes-api";
import ArticlesApi "mixins/articles-api";
import ExperiencesApi "mixins/experiences-api";
import GCoinsApi "mixins/gcoins-api";
import MockTestsApi "mixins/mockTests-api";
import FollowsApi "mixins/follows-api";

// New domain types
import EnrollTypes "types/enrollment";
import ReviewTypes "types/reviews";
import EmailTypes "types/email";
import NoteTypes "types/notes";
import ArticleTypes "types/articles";
import ExperienceTypes "types/experiences";
import MockTestTypes "types/mockTests";
import LoansApi "mixins/loans-api";
import LoanTypes "types/loans";



(with migration = Migration.run)
actor {

  // ── HTTP interface types (IC HTTP gateway standard) ──────────────────────────
  type HttpRequest = {
    method : Text;
    url : Text;
    headers : [(Text, Text)];
    body : Blob;
  };

  type HttpResponse = {
    status_code : Nat16;
    headers : [(Text, Text)];
    body : Blob;
  };

  // ── HTTP request handler — serves sitemap.xml and robots.txt ──────────────────
  // MUST be a query func so the IC HTTP gateway serves it to external crawlers
  // (Googlebot, etc.) via the certified query path. An update func would require
  // consensus and is NOT reachable by the IC HTTP gateway for asset serving.
  public query func http_request(req : HttpRequest) : async HttpResponse {
    // Strip query string: keep only the path portion before '?'
    let path : Text = switch (req.url.split(#char '?').next()) {
      case (?p) p;
      case null req.url;
    };

    // Always use the real production domain. The Host header on ICP is
    // unreliable and must not be used to build canonical sitemap URLs.
    let baseUrl : Text = "https://codeandcrush.app";

    if (path == "/sitemap.xml") {
      let today = "2026-04-16";
      // This is a React SPA with hash-based routing.
      // Hash fragments (#) are NEVER sent to the server and are invisible to
      // Google's crawler. The sitemap therefore lists only the real root URL
      // (the only URL Google can actually crawl on a hash-routed SPA).
      let xml : Text =
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" #
        "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" #
        "  <url>\n" #
        "    <loc>" # baseUrl # "/</loc>\n" #
        "    <lastmod>" # today # "</lastmod>\n" #
        "    <changefreq>daily</changefreq>\n" #
        "    <priority>1.0</priority>\n" #
        "  </url>\n" #
        "</urlset>\n";
      return {
        status_code = 200 : Nat16;
        headers = [
          ("Content-Type", "application/xml; charset=utf-8"),
          ("Cache-Control", "public, max-age=3600"),
          ("Access-Control-Allow-Origin", "*"),
        ];
        body = xml.encodeUtf8();
      };
    };

    if (path == "/robots.txt") {
      let robots : Text =
        "User-agent: *\n" #
        "Allow: /\n" #
        "Sitemap: " # baseUrl # "/sitemap.xml\n";
      return {
        status_code = 200 : Nat16;
        headers = [
          ("Content-Type", "text/plain; charset=utf-8"),
          ("Cache-Control", "public, max-age=3600"),
          ("Access-Control-Allow-Origin", "*"),
        ];
        body = robots.encodeUtf8();
      };
    };

    {
      status_code = 404 : Nat16;
      headers = [("Content-Type", "text/plain")];
      body = "Not found".encodeUtf8();
    };
  };

  type Personality = {
    #encouraging;
    #witty;
    #calm;
    #playful;
  };

  module Personality {
    public func toText(personality : Personality) : Text {
      switch (personality) {
        case (#encouraging) { "encouraging" };
        case (#witty) { "witty" };
        case (#calm) { "calm" };
        case (#playful) { "playful" };
      };
    };
  };

  type UserProfile = {
    username : Text;
    xp : Nat;
    streakDays : Nat;
    level : Nat;
    lastActive : Int;
    companionName : Text;
    personality : Personality;
    completedTopics : [Text];
    badges : [Text];
    messagesSent : Nat;
    burnoutScore : Nat;
  };

  module UserProfile {
    public func compare(a : UserProfile, b : UserProfile) : Order.Order {
      Text.compare(a.username, b.username);
    };
  };

  type Question = {
    text : Text;
    answers : [Text];
    correctIndex : Nat;
    difficulty : Nat;
    xpReward : Nat;
    topic : Text;
  };

  module Question {
    public func compare(a : Question, b : Question) : Order.Order {
      Text.compare(a.topic, b.topic);
    };
  };

  type Message = {
    role : Text; // "user" or "companion"
    text : Text;
    timestamp : Int;
  };

  module Message {
    public func compare(a : Message, b : Message) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  // Existing state
  let userProfiles = Map.empty<Principal, UserProfile>();
  let allQuestions = List.empty<Question>();
  let convoHistory = Map.empty<Principal, List.List<Message>>();

  // New domain state
  let enrollments = Map.empty<Principal, List.List<EnrollTypes.CourseId>>();
  let reviews = List.empty<ReviewTypes.Review>();
  let nextReviewId = { var value = 0 };
  let pendingVerifications = Map.empty<Text, EmailTypes.PendingVerification>();
  let notesMap = Map.empty<Principal, List.List<NoteTypes.Note>>();
  let articlesMap = Map.empty<Text, ArticleTypes.Article>();
  let experiencesMap = Map.empty<Text, ExperienceTypes.Experience>();
  let gcoinBalances = Map.empty<Principal, Nat>();
  let mockTestResultsMap = Map.empty<Principal, List.List<MockTestTypes.MockTestResult>>();

  // Follows state: two maps for O(log n) bidirectional lookup
  let followingMap = Map.empty<Principal, List.List<Principal>>();
  let followersMap = Map.empty<Principal, List.List<Principal>>();

  // New loans domain state
  let loanApplications = Map.empty<Text, LoanTypes.LoanApplication>();
  let meetingRequests = Map.empty<Text, LoanTypes.MeetingRequest>();
  let cibilChecks = Map.empty<Text, LoanTypes.CibilCheck>();
  let monthlyReports = Map.empty<Text, LoanTypes.MonthlyReport>();

  // Include new domain mixins
  include EnrollmentApi(enrollments);
  include ReviewsApi(reviews, nextReviewId);
  include EmailApi(pendingVerifications);
  include ProgressApi(userProfiles, enrollments);
  include AiProxyApi();
  include NotesApi(notesMap);
  include ArticlesApi(articlesMap);
  include ExperiencesApi(experiencesMap);
  include GCoinsApi(gcoinBalances);
  include MockTestsApi(mockTestResultsMap);
  include FollowsApi(followingMap, followersMap);
  include LoansApi(loanApplications, meetingRequests, cibilChecks, monthlyReports);

  // ── Existing methods (unchanged) ────────────────────────────────────────────

  public shared ({ caller }) func getOrCreateProfile(username : Text) : async UserProfile {
    switch (userProfiles.get(caller)) {
      case (?profile) { profile };
      case (null) {
        let newProfile : UserProfile = {
          username;
          xp = 0;
          streakDays = 0;
          level = 1;
          lastActive = Time.now();
          companionName = "AI Buddy";
          personality = #encouraging;
          completedTopics = [];
          badges = [];
          messagesSent = 0;
          burnoutScore = 0;
        };
        userProfiles.add(caller, newProfile);
        newProfile;
      };
    };
  };

  public shared ({ caller }) func addMessage(role : Text, text : Text) : async () {
    let newMessage : Message = {
      role;
      text;
      timestamp = Time.now();
    };

    let currentHistory = switch (convoHistory.get(caller)) {
      case (?history) { history };
      case (null) { List.empty<Message>() };
    };

    currentHistory.add(newMessage);

    while (currentHistory.size() > 20) {
      ignore currentHistory.removeLast();
    };

    convoHistory.add(caller, currentHistory);
  };

  public query ({ caller }) func getHistory() : async [Message] {
    switch (convoHistory.get(caller)) {
      case (?history) {
        history.toArray().sort();
      };
      case (null) { [] };
    };
  };

  public query func getQuestionsByTopic(topic : Text) : async [Question] {
    allQuestions.toArray().filter(
      func(q) { q.topic == topic }
    );
  };

  public shared ({ caller }) func completeTopic(topicId : Text) : async () {
    switch (userProfiles.get(caller)) {
      case (?profile) {
        let updatedTopics = profile.completedTopics.concat([topicId]);
        let updatedProfile = {
          profile with completedTopics = updatedTopics
        };
        userProfiles.add(caller, updatedProfile);
      };
      case (null) {};
    };
  };

  public shared ({ caller }) func awardBadge(badgeId : Text) : async () {
    switch (userProfiles.get(caller)) {
      case (?profile) {
        let updatedBadges = profile.badges.concat([badgeId]);
        let updatedProfile = {
          profile with badges = updatedBadges
        };
        userProfiles.add(caller, updatedProfile);
      };
      case (null) {};
    };
  };

  public query ({ caller }) func getAllStats() : async UserProfile {
    switch (userProfiles.get(caller)) {
      case (?profile) { profile };
      case (null) { Runtime.trap("No profile found.") };
    };
  };

  public shared ({ caller }) func updateCompanion(name : Text, personality : Personality) : async () {
    switch (userProfiles.get(caller)) {
      case (?profile) {
        let updatedProfile = {
          profile with companionName = name; personality
        };
        userProfiles.add(caller, updatedProfile);
      };
      case (null) {};
    };
  };

  public shared func addSampleQuestions() : async () {
    let sampleQuestions = [
      {
        text = "What does CPU stand for?";
        answers = ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"];
        correctIndex = 0;
        difficulty = 1;
        xpReward = 10;
        topic = "Hardware";
      },
      {
        text = "Which language is primarily used for web development?";
        answers = ["Python", "Java", "HTML", "C++"];
        correctIndex = 2;
        difficulty = 1;
        xpReward = 10;
        topic = "Web Development";
      },
    ];

    for (q in sampleQuestions.vals()) {
      allQuestions.add(q);
    };
  };
};
