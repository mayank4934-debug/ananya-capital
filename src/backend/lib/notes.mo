import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import NoteTypes "../types/notes";

/// Domain logic for personal notes
module {

  /// Save (create) a new note for the caller
  public func save(
    notesMap : Map.Map<Principal, List.List<NoteTypes.Note>>,
    userId : Principal,
    title : Text,
    content : Text,
    topicId : Text,
  ) : NoteTypes.Note {
    let now = Time.now();
    let note : NoteTypes.Note = {
      id = userId.toText() # "-" # now.toText();
      userId;
      title;
      content;
      topicId;
      createdAt = now;
      updatedAt = now;
    };
    let existing = switch (notesMap.get(userId)) {
      case (?list) list;
      case null List.empty<NoteTypes.Note>();
    };
    existing.add(note);
    notesMap.add(userId, existing);
    note;
  };

  /// Return all notes for the caller, newest first
  public func getAll(
    notesMap : Map.Map<Principal, List.List<NoteTypes.Note>>,
    userId : Principal,
  ) : [NoteTypes.Note] {
    switch (notesMap.get(userId)) {
      case (?list) list.toArray();
      case null [];
    };
  };

  /// Delete a note by id. Returns true if removed, false if not found.
  public func delete(
    notesMap : Map.Map<Principal, List.List<NoteTypes.Note>>,
    userId : Principal,
    noteId : Text,
  ) : Bool {
    switch (notesMap.get(userId)) {
      case (?list) {
        let before = list.size();
        let filtered = list.filter(func(n : NoteTypes.Note) : Bool { n.id != noteId });
        notesMap.add(userId, filtered);
        filtered.size() < before;
      };
      case null false;
    };
  };

  /// Update an existing note's title and content. Returns the updated note or null.
  public func update(
    notesMap : Map.Map<Principal, List.List<NoteTypes.Note>>,
    userId : Principal,
    noteId : Text,
    title : Text,
    content : Text,
  ) : ?NoteTypes.Note {
    switch (notesMap.get(userId)) {
      case (?list) {
        var updated : ?NoteTypes.Note = null;
        list.mapInPlace(func(n : NoteTypes.Note) : NoteTypes.Note {
          if (n.id == noteId) {
            let newNote = { n with title; content; updatedAt = Time.now() };
            updated := ?newNote;
            newNote;
          } else n;
        });
        notesMap.add(userId, list);
        updated;
      };
      case null null;
    };
  };
};
