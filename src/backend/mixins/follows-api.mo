import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import FollowsLib "../lib/follows";

mixin (
  followingMap : Map.Map<Principal, List.List<Principal>>,
  followersMap : Map.Map<Principal, List.List<Principal>>,
) {

  /// Follow a user by their Principal text ID. Returns true on success.
  public shared ({ caller }) func followUser(targetId : Text) : async Bool {
    let target = Principal.fromText(targetId);
    if (Principal.equal(caller, target)) { return false };
    FollowsLib.follow(followingMap, followersMap, caller, target);
    true;
  };

  /// Unfollow a user by their Principal text ID. Returns true on success.
  public shared ({ caller }) func unfollowUser(targetId : Text) : async Bool {
    let target = Principal.fromText(targetId);
    FollowsLib.unfollow(followingMap, followersMap, caller, target);
    true;
  };

  /// Get the list of Principal text IDs that the caller is following.
  public query ({ caller }) func getMyFollowing() : async [Text] {
    let principals = FollowsLib.getFollowing(followingMap, caller);
    principals.map<Principal, Text>(func(p) { p.toText() });
  };

  /// Get the list of Principal text IDs that follow the caller.
  public query ({ caller }) func getMyFollowers() : async [Text] {
    let principals = FollowsLib.getFollowers(followersMap, caller);
    principals.map<Principal, Text>(func(p) { p.toText() });
  };

  /// Check if the caller is following the given user.
  public query ({ caller }) func isFollowingUser(targetId : Text) : async Bool {
    let target = Principal.fromText(targetId);
    FollowsLib.isFollowing(followingMap, caller, target);
  };
};
