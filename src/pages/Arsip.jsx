import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

function Arsip() {
  const archivedNotes = getArchivedNotes();

  return (
    <section>
      <h2>Catatan Arsip</h2>
      {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} />
      ) : (
        <p className="empty-message">Arsip kosong</p>
      )}
    </section>
  );
}

export default Arsip;
