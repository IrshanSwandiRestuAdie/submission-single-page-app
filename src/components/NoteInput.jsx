import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return; 
    addNote({
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    });
    setTitle("");
    setBody("");
  };

  return (
    <form className="note-input" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Judul catatan..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength="50"
        required
      />
      <textarea
        placeholder="Tulis catatanmu..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

export default NoteInput;
