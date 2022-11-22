import React, { useState } from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNotes }) => {
  const [editText, setEditText] = useState("");

  const editNotes = (text) => {
      setEditText(text)
  };

  return (
    <div className="notes-list">
      <AddNotes editText={editText} handleAddNote={handleAddNote} />

      {notes.map((note) => (
        <Note
          key={note.id}
          handleEditNotes={editNotes}
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
