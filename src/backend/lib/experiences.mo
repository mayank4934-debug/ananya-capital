import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";
import ExperienceTypes "../types/experiences";

/// Domain logic for interview experiences
module {

  /// Create and store a new interview experience
  public func submit(
    experiencesMap : Map.Map<Text, ExperienceTypes.Experience>,
    authorName : Text,
    company : Text,
    role : Text,
    difficulty : Text,
    experienceText : Text,
  ) : ExperienceTypes.Experience {
    let now = Time.now();
    let id = company # "-" # now.toText();
    let experience : ExperienceTypes.Experience = {
      id;
      authorName;
      company;
      role;
      difficulty;
      experienceText;
      createdAt = now;
    };
    experiencesMap.add(id, experience);
    experience;
  };

  /// Return all experiences, newest first
  public func getAll(experiencesMap : Map.Map<Text, ExperienceTypes.Experience>) : [ExperienceTypes.Experience] {
    experiencesMap.entries()
      .map<(Text, ExperienceTypes.Experience), ExperienceTypes.Experience>(func((_, e)) { e })
      .toArray();
  };
};
