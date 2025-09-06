import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  if (!notes.length) {
    return <h2>Catatan tidak ditemukan ❌</h2>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
