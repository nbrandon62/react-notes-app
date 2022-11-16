import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNotes, handleEditNotes }) => {

  return (
    <div
    className="note"
    key={id}
    onClick={() => {
      handleEditNotes(text)
      handleDeleteNotes(id)
      }}>
      <span>{text}</span>

      <div className="note-footer">
        <small>{date}</small>

        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNotes(id)}
        />
      </div>
    </div>
  );
};

export default Note;
