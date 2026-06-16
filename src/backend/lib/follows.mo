import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

module {
  /// followingMap: caller Principal -> List of Principals they follow
  /// followersMap: target Principal -> List of Principals following them

  public func follow(
    followingMap : Map.Map<Principal, List.List<Principal>>,
    followersMap : Map.Map<Principal, List.List<Principal>>,
    caller : Principal,
    target : Principal,
  ) {
    // Add target to caller's following list (if not already present)
    let following = switch (followingMap.get(caller)) {
      case (?lst) lst;
      case null {
        let lst = List.empty<Principal>();
        followingMap.add(caller, lst);
        lst;
      };
    };
    if (not following.contains(target)) {
      following.add(target);
    };

    // Add caller to target's followers list (if not already present)
    let followers = switch (followersMap.get(target)) {
      case (?lst) lst;
      case null {
        let lst = List.empty<Principal>();
        followersMap.add(target, lst);
        lst;
      };
    };
    if (not followers.contains(caller)) {
      followers.add(caller);
    };
  };

  public func unfollow(
    followingMap : Map.Map<Principal, List.List<Principal>>,
    followersMap : Map.Map<Principal, List.List<Principal>>,
    caller : Principal,
    target : Principal,
  ) {
    // Remove target from caller's following list
    switch (followingMap.get(caller)) {
      case (?lst) {
        let updated = lst.filter(func(p : Principal) : Bool {
          not Principal.equal(p, target)
        });
        followingMap.add(caller, updated);
      };
      case null {};
    };

    // Remove caller from target's followers list
    switch (followersMap.get(target)) {
      case (?lst) {
        let updated = lst.filter(func(p : Principal) : Bool {
          not Principal.equal(p, caller)
        });
        followersMap.add(target, updated);
      };
      case null {};
    };
  };

  public func getFollowing(
    followingMap : Map.Map<Principal, List.List<Principal>>,
    caller : Principal,
  ) : [Principal] {
    switch (followingMap.get(caller)) {
      case (?lst) lst.toArray();
      case null [];
    };
  };

  public func getFollowers(
    followersMap : Map.Map<Principal, List.List<Principal>>,
    target : Principal,
  ) : [Principal] {
    switch (followersMap.get(target)) {
      case (?lst) lst.toArray();
      case null [];
    };
  };

  public func isFollowing(
    followingMap : Map.Map<Principal, List.List<Principal>>,
    caller : Principal,
    target : Principal,
  ) : Bool {
    switch (followingMap.get(caller)) {
      case (?lst) lst.contains(target);
      case null false;
    };
  };
};
