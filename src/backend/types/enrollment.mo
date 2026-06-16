import Common "common";

module {
  public type CourseId = Common.CourseId;

  /// Tracks which courses (max 2) a user is enrolled in
  public type EnrollmentState = {
    enrolledCourses : [CourseId];
  };

  public type EnrollResult = { #ok; #err : Text };
};
