import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Types "../types/email";

/// Domain logic for email OTP verification (delegates to email-verification extension)
module {
  public type PendingVerification = Types.PendingVerification;
  public type VerifyResult = Types.VerifyResult;

  /// Stores a pending verification record for the given email + code
  public func storePending(
    pending : Map.Map<Text, PendingVerification>,
    email : Text,
    code : Text,
    expiresAt : Int,
  ) : () {
    Runtime.trap("not implemented");
  };

  /// Checks the code against the stored pending record; returns #ok if valid
  /// and not expired, removes it on success
  public func verify(
    pending : Map.Map<Text, PendingVerification>,
    email : Text,
    code : Text,
    now : Int,
  ) : VerifyResult {
    Runtime.trap("not implemented");
  };
};
