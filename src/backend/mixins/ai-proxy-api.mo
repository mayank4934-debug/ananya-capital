import Text "mo:core/Text";
import AiTypes "../types/ai";

/// Public API mixin for proxying AI chat calls from the frontend.
/// Uses a centralized shared API key — no per-user key required.
mixin () {

  // Shared Claude API key — replace with a real key before deploying.
  // This is stored in the canister code, not per-user.
  let SHARED_API_KEY : Text = "SHARED_API_KEY_HERE";
  let CLAUDE_API_URL : Text = "https://api.anthropic.com/v1/messages";
  let CLAUDE_MODEL : Text = "claude-sonnet-4-5";

  /// Proxy AI chat: sends messages to Claude and returns the response text.
  /// Never traps — returns empty string on any error.
  public shared func proxyAIChat(
    messages : [AiTypes.AIChatMessage],
    systemPrompt : Text,
  ) : async Text {
    // Build the JSON body for the Claude Messages API
    let messagesJson : Text = buildMessagesJson(messages);
    let bodyJson : Text =
      "{" #
      "\"model\":\"" # CLAUDE_MODEL # "\"," #
      "\"max_tokens\":1024," #
      "\"system\":\"" # escapeJson(systemPrompt) # "\"," #
      "\"messages\":" # messagesJson #
      "}";

    let bodyBytes = bodyJson.encodeUtf8();

    let httpRequest = {
      url = CLAUDE_API_URL;
      max_response_bytes = ?16384 : ?Nat64;
      headers = [
        { name = "Content-Type"; value = "application/json" },
        { name = "x-api-key"; value = SHARED_API_KEY },
        { name = "anthropic-version"; value = "2023-06-01" },
      ];
      body = ?bodyBytes;
      method = #post;
      transform = null;
    };

    try {
      let ic : actor {
        http_request : ({
          url : Text;
          max_response_bytes : ?Nat64;
          headers : [{ name : Text; value : Text }];
          body : ?Blob;
          method : { #get; #post; #head };
          transform : ?{
            function : shared ({ response : { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob }; context : Blob }) -> async { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob };
            context : Blob;
          };
        }) -> async { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob };
      } = actor ("aaaaa-aa");

      let response = await ic.http_request(httpRequest);

      if (response.status >= 200 and response.status < 300) {
        let responseText = switch (response.body.decodeUtf8()) {
          case (?t) t;
          case null { return "" };
        };
        extractClaudeContent(responseText);
      } else {
        "";
      };
    } catch (_) {
      "";
    };
  };

  /// Build a JSON array of message objects from AIChatMessage array
  func buildMessagesJson(messages : [AiTypes.AIChatMessage]) : Text {
    if (messages.size() == 0) { return "[]" };
    var parts : Text = "[";
    var first = true;
    for (msg in messages.vals()) {
      if (not first) { parts #= "," };
      parts #= "{\"role\":\"" # escapeJson(msg.role) # "\",\"content\":\"" # escapeJson(msg.content) # "\"}";
      first := false;
    };
    parts # "]";
  };

  /// Escape special JSON characters in a string
  func escapeJson(s : Text) : Text {
    var result : Text = "";
    for (c in s.toIter()) {
      if (c == '\\') { result #= "\\\\" }
      else if (c == '\"') { result #= "\\\"" }
      else if (c == '\n') { result #= "\\n" }
      else if (c == '\r') { result #= "\\r" }
      else if (c == '\t') { result #= "\\t" }
      else { result #= Text.fromChar(c) };
    };
    result;
  };

  /// Extract the text content from the Claude API JSON response.
  /// Looks for the pattern "\"text\":\"..." in the response body.
  func extractClaudeContent(json : Text) : Text {
    // Look for: "type":"text","text":"<content>"
    let marker = "\"text\":\"";
    let markerSize = marker.size();
    let jsonSize = json.size();
    if (jsonSize < markerSize) { return "" };

    // Find the marker in the text using character iteration
    var matchStart : ?Nat = null;
    var i = 0;
    let chars = json.toArray();
    let markerChars = marker.toArray();
    label search for (idx in chars.keys()) {
      if (idx + markerSize > jsonSize) { break search };
      var matched = true;
      var j = 0;
      while (j < markerSize) {
        if (chars[idx + j] != markerChars[j]) {
          matched := false;
        };
        j += 1;
      };
      if (matched) {
        matchStart := ?(idx + markerSize);
        break search;
      };
      i += 1;
    };

    let start = switch (matchStart) {
      case (?s) s;
      case null { return "" };
    };

    // Read until closing unescaped quote
    var content : Text = "";
    var k = start;
    var prevBackslash = false;
    while (k < chars.size()) {
      let ch = chars[k];
      if (prevBackslash) {
        if (ch == 'n') { content #= "\n" }
        else if (ch == 'r') { content #= "\r" }
        else if (ch == 't') { content #= "\t" }
        else { content #= Text.fromChar(ch) };
        prevBackslash := false;
      } else if (ch == '\\') {
        prevBackslash := true;
      } else if (ch == '\"') {
        return content;
      } else {
        content #= Text.fromChar(ch);
      };
      k += 1;
    };
    content;
  };
};
