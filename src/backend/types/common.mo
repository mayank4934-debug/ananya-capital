// Cross-cutting types shared across all domains
module {
  public type UserId = Principal;
  public type Timestamp = Int;
  public type CourseId = Text;

  /// Generic result type for operations that may fail with a text reason
  public type Result<T> = { #ok : T; #err : Text };
};
