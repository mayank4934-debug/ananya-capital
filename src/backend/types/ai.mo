// AI-related shared types
module {
  /// A single chat message in the AI conversation
  public type AIChatMessage = {
    role : Text;    // "user" | "assistant" | "system"
    content : Text;
  };
};
