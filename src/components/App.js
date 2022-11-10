import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
