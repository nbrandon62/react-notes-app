import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);
  
  const addNote = (noteText) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: date.toLocaleDateString()
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    //return the array notes that does not have that id that was clicked 
    //.filter() returns a new array so no need to create a new array like in the addNote()
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNotes={deleteNote} />
    </div>
  );
};

export default App;
