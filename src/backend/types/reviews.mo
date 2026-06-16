import Common "common";

module {
  public type Timestamp = Common.Timestamp;

  /// A user-submitted review for the app (Play Store style)
  public type Review = {
    id : Nat;
    name : Text;
    rating : Nat; // 1–5
    comment : Text;
    timestamp : Timestamp;
  };
};
