import List "mo:core/List";
import Debug "mo:core/Debug";
import ReviewLib "../lib/reviews";
import ReviewTypes "../types/reviews";

/// Public API mixin for user app reviews (Play Store style)
mixin (reviews : List.List<ReviewTypes.Review>, nextReviewId : { var value : Nat }) {

  /// Submit a review. Rating must be 1–5. Comment must be non-empty, max 500 chars.
  public shared ({ caller = _ }) func submitReview(
    name : Text,
    rating : Nat,
    comment : Text,
  ) : async { #ok : ReviewTypes.Review; #err : Text } {
    let result = ReviewLib.submit(reviews, nextReviewId.value, name, rating, comment);
    switch (result) {
      case (#ok(review)) {
        nextReviewId.value += 1;
        #ok(review);
      };
      case (#err(msg)) { #err(msg) };
    };
  };

  /// Returns all submitted reviews, newest first.
  public query func getReviews() : async [ReviewTypes.Review] {
    ReviewLib.getAll(reviews);
  };
};
