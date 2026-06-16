import Principal "mo:core/Principal";

module {
  public type Follow = {
    follower : Principal;
    following : Principal;
    createdAt : Int;
  };
};
