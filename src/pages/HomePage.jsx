import React from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const notes = getActiveNotes();
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="homepage">
      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default HomePage;
