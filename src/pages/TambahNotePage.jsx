import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";

function TambahNotePage() {
  const navigate = useNavigate();

  const onAddNote = (note) => {
    addNote(note);     
    navigate("/");     
  };

  return (
    <div className="tambah-note-page">
      <h2>Tambah Catatan Baru</h2>
      <NoteInput addNote={onAddNote} />
    </div>
  );
}

export default TambahNotePage;
