import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import EnrollLib "../lib/enrollment";
import EnrollTypes "../types/enrollment";

/// Public API mixin for course enrollment
mixin (enrollments : Map.Map<Principal, List.List<EnrollTypes.CourseId>>) {

  /// Returns the caller's enrolled courses (at most 2)
  public query ({ caller }) func getEnrolledCourses() : async [EnrollTypes.CourseId] {
    Runtime.trap("not implemented");
  };

  /// Enroll the caller in a course. Returns #err if already at limit or duplicate.
  public shared ({ caller }) func enrollCourse(courseId : Text) : async EnrollTypes.EnrollResult {
    Runtime.trap("not implemented");
  };

  /// Unenroll the caller from a course. Returns #err if not enrolled.
  public shared ({ caller }) func unenrollCourse(courseId : Text) : async EnrollTypes.EnrollResult {
    Runtime.trap("not implemented");
  };
};
