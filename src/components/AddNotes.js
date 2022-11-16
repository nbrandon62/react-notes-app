import React, { useEffect, useState } from "react";

const AddNotes = ({ handleAddNote, editText }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  useEffect(() => {
      setNoteText(editText)
  }, [editText])

  const handleSaveClick = () => {
    //.trim() removes the white spaces from both ends of a string and returns a new string without whitespace
    //if the noteText without whitespace is greater than zero, create a new note, and set the state of noteText back to an empty string.
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  const handleChange = (e) => {
    //if characterLimit - whatever is typed in the input field is greater than or equal to 0, envoke the set state function setNoteText(). Else, do nothing.
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };


  return (
    <div className="note new">
      <textarea
        value={noteText}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>

      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
