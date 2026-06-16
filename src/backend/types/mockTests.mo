import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  /// Result of a completed mock test session
  public type MockTestResult = {
    id : Text;
    userId : Principal;
    testId : Text;
    score : Nat;
    totalQuestions : Nat;
    timeTaken : Nat;
    completedAt : Timestamp;
    answers : [Text];
  };
};
