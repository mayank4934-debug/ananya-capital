import Map "mo:core/Map";
import Text "mo:core/Text";
import ArticleLib "../lib/articles";
import ArticleTypes "../types/articles";

/// Public API mixin for community articles
mixin (articlesMap : Map.Map<Text, ArticleTypes.Article>) {

  /// Submit a new article for review (starts as "pending")
  public shared ({ caller }) func submitArticle(
    title : Text,
    content : Text,
    tags : [Text],
    authorName : Text,
  ) : async ArticleTypes.Article {
    ArticleLib.submit(articlesMap, caller, authorName, title, content, tags);
  };

  /// Return articles filtered by status. Pass "" to get all articles.
  public query func getArticles(status : Text) : async [ArticleTypes.Article] {
    ArticleLib.getByStatus(articlesMap, status);
  };

  /// Like an article. Returns true on success, false if the article was not found.
  public shared func likeArticle(id : Text) : async Bool {
    ArticleLib.like(articlesMap, id);
  };

  /// Dislike an article. Returns true on success, false if the article was not found.
  public shared func dislikeArticle(id : Text) : async Bool {
    ArticleLib.dislike(articlesMap, id);
  };

  /// Increment the view count for an article. Returns true on success.
  public shared func incrementArticleView(id : Text) : async Bool {
    ArticleLib.incrementView(articlesMap, id);
  };
};
