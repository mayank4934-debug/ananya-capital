import Common "common";

module {
  public type Timestamp = Common.Timestamp;

  /// A user-submitted interview experience
  public type Experience = {
    id : Text;
    authorName : Text;
    company : Text;
    role : Text;
    difficulty : Text;
    experienceText : Text;
    createdAt : Timestamp;
  };
};
