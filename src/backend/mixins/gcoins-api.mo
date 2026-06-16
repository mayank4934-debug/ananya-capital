import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

/// Public API mixin for GCoins balance management.
/// Operates on the userProfiles map — each profile carries a `gcoins` field.
/// The profile type must include `gcoins : Nat`.
mixin (gcoins : Map.Map<Principal, Nat>) {

  /// Award GCoins to the calling user. Returns the new balance.
  public shared ({ caller }) func awardGCoins(amount : Nat) : async Nat {
    let current = switch (gcoins.get(caller)) {
      case (?bal) bal;
      case null 0;
    };
    let newBal = current + amount;
    gcoins.add(caller, newBal);
    newBal;
  };

  /// Return the calling user's current GCoin balance.
  public query ({ caller }) func getGCoins() : async Nat {
    switch (gcoins.get(caller)) {
      case (?bal) bal;
      case null 0;
    };
  };
};
