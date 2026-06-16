import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Principal "mo:core/Principal";
import ArticleTypes "../types/articles";

/// Domain logic for community articles
module {

  /// Create and store a new article in pending status
  public func submit(
    articlesMap : Map.Map<Text, ArticleTypes.Article>,
    authorId : Principal,
    authorName : Text,
    title : Text,
    content : Text,
    tags : [Text],
  ) : ArticleTypes.Article {
    let now = Time.now();
    let id = authorId.toText() # "-" # now.toText();
    let article : ArticleTypes.Article = {
      id;
      authorId;
      authorName;
      title;
      content;
      tags;
      createdAt = now;
      likes = 0;
      dislikes = 0;
      views = 0;
      status = "pending";
    };
    articlesMap.add(id, article);
    article;
  };

  /// Return articles filtered by status ("pending" | "approved" | "" for all)
  public func getByStatus(
    articlesMap : Map.Map<Text, ArticleTypes.Article>,
    status : Text,
  ) : [ArticleTypes.Article] {
    let iter = articlesMap.entries()
      .map(func((_, a)) { a });
    if (status == "") {
      iter.toArray()
    } else {
      iter.filter(func(a : ArticleTypes.Article) : Bool { a.status == status }).toArray()
    };
  };

  /// Increment likes; returns true on success, false if not found
  public func like(articlesMap : Map.Map<Text, ArticleTypes.Article>, id : Text) : Bool {
    switch (articlesMap.get(id)) {
      case (?a) {
        articlesMap.add(id, { a with likes = a.likes + 1 });
        true;
      };
      case null false;
    };
  };

  /// Increment dislikes; returns true on success, false if not found
  public func dislike(articlesMap : Map.Map<Text, ArticleTypes.Article>, id : Text) : Bool {
    switch (articlesMap.get(id)) {
      case (?a) {
        articlesMap.add(id, { a with dislikes = a.dislikes + 1 });
        true;
      };
      case null false;
    };
  };

  /// Increment view count; returns true on success, false if not found
  public func incrementView(articlesMap : Map.Map<Text, ArticleTypes.Article>, id : Text) : Bool {
    switch (articlesMap.get(id)) {
      case (?a) {
        articlesMap.add(id, { a with views = a.views + 1 });
        true;
      };
      case null false;
    };
  };
};
