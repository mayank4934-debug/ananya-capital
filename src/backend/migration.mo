import List "mo:core/List";
import Int "mo:core/Int";
import NewReviewTypes "types/reviews";

module {
  // Old types defined inline (copied from .old/src/backend/types/reviews.mo)
  public type OldReview = {
    id : Nat;
    username : Text;
    rating : Nat;
    text : Text;
    universityName : Text;
    timestamp : Int;
  };

  // New types imported from current types module
  public type NewReview = NewReviewTypes.Review;

  // OldActor mirrors the previous stable state shape
  public type OldActor = {
    reviews : List.List<OldReview>;
  };

  // NewActor mirrors the new stable state shape
  public type NewActor = {
    reviews : List.List<NewReview>;
    nextReviewId : { var value : Nat };
  };

  /// Transform old reviews to new format:
  /// - username -> name
  /// - text -> comment
  /// - universityName is dropped
  public func run(old : OldActor) : NewActor {
    let newReviews = List.empty<NewReview>();
    var maxId : Nat = 0;

    for (oldReview in old.reviews.toArray().vals()) {
      let newReview : NewReview = {
        id = oldReview.id;
        name = oldReview.username;
        rating = oldReview.rating;
        comment = oldReview.text;
        timestamp = oldReview.timestamp;
      };
      newReviews.add(newReview);
      if (oldReview.id > maxId) {
        maxId := oldReview.id;
      };
    };

    { reviews = newReviews; nextReviewId = { var value = maxId + 1 } };
  };
};
