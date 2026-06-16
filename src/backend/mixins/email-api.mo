import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import EmailTypes "../types/email";

/// Public API mixin for email OTP verification
/// Uses the email-verification platform extension for sending real OTP emails.
mixin (pendingVerifications : Map.Map<Text, EmailTypes.PendingVerification>) {

  /// Initiates email verification by sending a 6-digit OTP to the given address
  /// via the email-verification platform extension.
  public shared ({ caller }) func sendVerificationEmail(email : Text) : async () {
    Runtime.trap("not implemented");
  };

  /// Verifies the OTP code for the given email.
  /// Returns #ok if the code is valid and not expired, #err otherwise.
  public shared ({ caller }) func verifyEmail(
    email : Text,
    code : Text,
  ) : async EmailTypes.VerifyResult {
    Runtime.trap("not implemented");
  };
};
