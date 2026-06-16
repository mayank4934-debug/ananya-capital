import Map "mo:core/Map";
import Text "mo:core/Text";
import ExperienceLib "../lib/experiences";
import ExperienceTypes "../types/experiences";

/// Public API mixin for interview experiences
mixin (experiencesMap : Map.Map<Text, ExperienceTypes.Experience>) {

  /// Submit an interview experience. No login required — authorName is provided by the user.
  public shared func submitExperience(
    authorName : Text,
    company : Text,
    role : Text,
    difficulty : Text,
    experienceText : Text,
  ) : async ExperienceTypes.Experience {
    ExperienceLib.submit(experiencesMap, authorName, company, role, difficulty, experienceText);
  };

  /// Return all interview experiences
  public query func getExperiences() : async [ExperienceTypes.Experience] {
    ExperienceLib.getAll(experiencesMap);
  };
};
