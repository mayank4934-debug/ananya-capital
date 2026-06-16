import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import ProgressTypes "../types/progress";
import EnrollTypes "../types/enrollment";

/// Public API mixin for shareable progress reports
mixin (
  userProfiles : Map.Map<Principal, {
    username : Text;
    xp : Nat;
    level : Nat;
    streakDays : Nat;
    lastActive : Int;
    companionName : Text;
    personality : { #encouraging; #witty; #calm; #playful };
    completedTopics : [Text];
    badges : [Text];
    messagesSent : Nat;
    burnoutScore : Nat;
  }>,
  enrollments : Map.Map<Principal, List.List<EnrollTypes.CourseId>>,
) {

  /// Returns a shareable progress report for the caller.
  public query ({ caller }) func getProgressReport() : async ProgressTypes.ProgressReport {
    Runtime.trap("not implemented");
  };
};
