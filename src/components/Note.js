import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNotes }) => {
  return (
    <div className="note" key={id}>
      <span>{text}</span>

      <div className="note-footer">
        <small>{date}</small>

        <MdDeleteForever 
        className="delete-icon"
        size="1.3em"
        onClick={() => handleDeleteNotes(id)} />
      </div>
    </div>
  );
};

export default Note;
