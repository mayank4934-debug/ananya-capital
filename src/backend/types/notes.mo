import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  /// A personal note attached to a study topic
  public type Note = {
    id : Text;
    userId : Principal;
    title : Text;
    content : Text;
    topicId : Text;
    createdAt : Timestamp;
    updatedAt : Timestamp;
  };
};
