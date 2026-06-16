import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import ProgressTypes "../types/progress";
import EnrollTypes "../types/enrollment";

/// Domain logic for building shareable progress reports
module {
  public type ProgressReport = ProgressTypes.ProgressReport;
  public type CourseId = EnrollTypes.CourseId;

  /// Builds a ProgressReport for the given user from profile + enrollment data
  public func build(
    username : Text,
    xp : Nat,
    level : Nat,
    streakDays : Nat,
    completedTopics : [Text],
    quizzesPassedCount : Nat,
    badges : [Text],
    enrolledCourses : [CourseId],
  ) : ProgressReport {
    Runtime.trap("not implemented");
  };
};
