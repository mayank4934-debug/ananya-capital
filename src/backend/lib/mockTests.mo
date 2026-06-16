import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import MockTestTypes "../types/mockTests";

/// Domain logic for mock test results
module {

  /// Save a mock test result for the caller
  public func save(
    mockTestResultsMap : Map.Map<Principal, List.List<MockTestTypes.MockTestResult>>,
    userId : Principal,
    testId : Text,
    score : Nat,
    totalQuestions : Nat,
    timeTaken : Nat,
    answers : [Text],
  ) : MockTestTypes.MockTestResult {
    let now = Time.now();
    let result : MockTestTypes.MockTestResult = {
      id = userId.toText() # "-" # testId # "-" # now.toText();
      userId;
      testId;
      score;
      totalQuestions;
      timeTaken;
      completedAt = now;
      answers;
    };
    let existing = switch (mockTestResultsMap.get(userId)) {
      case (?list) list;
      case null List.empty<MockTestTypes.MockTestResult>();
    };
    existing.add(result);
    mockTestResultsMap.add(userId, existing);
    result;
  };

  /// Return all mock test results for the caller
  public func getAll(
    mockTestResultsMap : Map.Map<Principal, List.List<MockTestTypes.MockTestResult>>,
    userId : Principal,
  ) : [MockTestTypes.MockTestResult] {
    switch (mockTestResultsMap.get(userId)) {
      case (?list) list.toArray();
      case null [];
    };
  };
};
