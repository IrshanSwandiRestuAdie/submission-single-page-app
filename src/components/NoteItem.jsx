import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ note }) {
  return (
    <div className="note-item">
      <h3>
        <Link to={`/notes/${note.id}`} className="note-link">
          {note.title}
        </Link>
      </h3>
      <small>
        {new Date(note.createdAt).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </small>
      <p>
        {note.body.length > 120
          ? note.body.substring(0, 120) + "..."
          : note.body}
      </p>
    </div>
  );
}

export default NoteItem;
