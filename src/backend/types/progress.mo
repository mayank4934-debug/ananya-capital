module {
  /// Shareable progress report returned by getProgressReport()
  public type ProgressReport = {
    username : Text;
    xp : Nat;
    level : Nat;
    streakDays : Nat;
    completedTopicsCount : Nat;
    quizzesPassedCount : Nat;
    badges : [Text];
    enrolledCourses : [Text];
  };
};
