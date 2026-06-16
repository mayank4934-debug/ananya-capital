module {
  /// Tracks pending email verification codes keyed by email address
  public type PendingVerification = {
    email : Text;
    code : Text;
    expiresAt : Int;
  };

  public type VerifyResult = { #ok; #err : Text };
};
