import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import MockTestLib "../lib/mockTests";
import MockTestTypes "../types/mockTests";

/// Public API mixin for mock test results
mixin (mockTestResultsMap : Map.Map<Principal, List.List<MockTestTypes.MockTestResult>>) {

  /// Save a completed mock test result for the calling user
  public shared ({ caller }) func saveMockTestResult(
    testId : Text,
    score : Nat,
    totalQuestions : Nat,
    timeTaken : Nat,
    answers : [Text],
  ) : async MockTestTypes.MockTestResult {
    MockTestLib.save(mockTestResultsMap, caller, testId, score, totalQuestions, timeTaken, answers);
  };

  /// Return all mock test results for the calling user
  public query ({ caller }) func getMockTestResults() : async [MockTestTypes.MockTestResult] {
    MockTestLib.getAll(mockTestResultsMap, caller);
  };
};
