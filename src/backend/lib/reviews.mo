import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Debug "mo:core/Debug";
import Types "../types/reviews";

/// Domain logic for user-submitted app reviews (Play Store style)
module {
  public type Review = Types.Review;

  /// Appends a new review to the global reviews list.
  /// Validates: rating 1–5, comment non-empty and max 500 chars.
  /// Returns #ok with the new Review on success, or #err with a reason.
  public func submit(
    reviews : List.List<Review>,
    nextId : Nat,
    name : Text,
    rating : Nat,
    comment : Text,
  ) : { #ok : Review; #err : Text } {
    if (rating < 1 or rating > 5) {
      return #err("Rating must be between 1 and 5");
    };
    if (comment == "") {
      return #err("Comment cannot be empty");
    };
    if (comment.size() > 500) {
      return #err("Comment must be 500 characters or less");
    };
    let review : Review = {
      id = nextId;
      name;
      rating;
      comment;
      timestamp = Time.now();
    };
    reviews.add(review);
    #ok(review);
  };

  /// Returns all reviews sorted by timestamp descending (newest first).
  public func getAll(reviews : List.List<Review>) : [Review] {
    let arr = reviews.toArray();
    let sorted = Array.sort(arr, func(a, b) { Int.compare(b.timestamp, a.timestamp) });
    sorted;
  };
};
