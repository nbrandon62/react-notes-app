import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSaveClick = () => {
    //.trim() removes the white spaces from both ends of a string and returns a new string without whitespace
    //if the noteText without whitespace is greater than zero, create a new note, and set the state of noteText back to an empty string. 
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    } 
  };

  return (
    <div className="note new">
      <textarea
        value={noteText}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      ></textarea>

      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
