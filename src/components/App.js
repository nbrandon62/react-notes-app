import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import SearchBar from "./SearchBar";
import Header from "./Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState(false);

  //this useEffect hook says that only on component mount, stringify our local storage, and set the variable savedNotes. If there is a value in savedNotes, pass it to the setNotes function and update our state. Else, do nothing. 
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //this useEffect hook says that whenever the notes state changes, trigger this function that saves the data onto local storage.
  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);


  const addNote = (noteText) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    console.log(newNotes)
  };

  const deleteNote = (id) => {
    //return the array notes that does not have that id that was clicked
    //.filter() returns a new array so no need to create a new array like in the addNote()
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${theme && "dark-mode"}`}>
      <div className="container">
        <Header handleTheme={setTheme} />
        <SearchBar handleSearch={setSearchText} />
        <NotesList
          // this function says return an array in lowercase with a text property of note that matches searchText 
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNotes={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
