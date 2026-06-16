import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import NoteLib "../lib/notes";
import NoteTypes "../types/notes";

/// Public API mixin for personal notes
mixin (notesMap : Map.Map<Principal, List.List<NoteTypes.Note>>) {

  /// Save a new note for the calling user
  public shared ({ caller }) func saveNote(
    title : Text,
    content : Text,
    topicId : Text,
  ) : async NoteTypes.Note {
    NoteLib.save(notesMap, caller, title, content, topicId);
  };

  /// Return all notes for the calling user
  public query ({ caller }) func getNotes() : async [NoteTypes.Note] {
    NoteLib.getAll(notesMap, caller);
  };

  /// Delete a note by id. Returns true if the note existed and was removed.
  public shared ({ caller }) func deleteNote(noteId : Text) : async Bool {
    NoteLib.delete(notesMap, caller, noteId);
  };

  /// Update an existing note's title and content. Returns the updated note or null.
  public shared ({ caller }) func updateNote(
    noteId : Text,
    title : Text,
    content : Text,
  ) : async ?NoteTypes.Note {
    NoteLib.update(notesMap, caller, noteId, title, content);
  };
};
