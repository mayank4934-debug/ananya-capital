import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  /// A community-submitted article (pending approval before being public)
  public type Article = {
    id : Text;
    authorId : Principal;
    authorName : Text;
    title : Text;
    content : Text;
    tags : [Text];
    createdAt : Timestamp;
    likes : Nat;
    dislikes : Nat;
    views : Nat;
    /// "pending" | "approved"
    status : Text;
  };
};
