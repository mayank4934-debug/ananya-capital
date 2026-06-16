import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Types "../types/enrollment";

/// Domain logic for course enrollment (max 2 courses per user)
module {
  public type CourseId = Types.CourseId;
  public type EnrollResult = Types.EnrollResult;

  /// Returns the list of enrolled courses for a user (empty if none)
  public func getEnrolled(
    _enrollments : Map.Map<Principal, List.List<CourseId>>,
    _user : Principal,
  ) : [CourseId] {
    Runtime.trap("not implemented");
  };

  /// Enrolls a user in a course; returns #err if already at 2 enrolled courses
  /// or already enrolled in that course
  public func enroll(
    _enrollments : Map.Map<Principal, List.List<CourseId>>,
    _user : Principal,
    _courseId : CourseId,
  ) : EnrollResult {
    Runtime.trap("not implemented");
  };

  /// Unenrolls a user from a course; returns #err if not enrolled
  public func unenroll(
    _enrollments : Map.Map<Principal, List.List<CourseId>>,
    _user : Principal,
    _courseId : CourseId,
  ) : EnrollResult {
    Runtime.trap("not implemented");
  };
};
