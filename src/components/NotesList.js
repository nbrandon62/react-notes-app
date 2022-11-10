import React from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNotes }) => {
  return (
    <div className="notes-list">
      <AddNotes handleAddNote={handleAddNote} />

      {notes.map((note) => (
        <Note
          handleDeleteNotes={handleDeleteNotes}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default NotesList;
