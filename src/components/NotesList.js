import React from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="notes-list">
      <AddNotes handleAddNote={handleAddNote} />
      
      {notes.map((note) => (
        <Note
         key={note.id} 
         text={note.text} 
         date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
