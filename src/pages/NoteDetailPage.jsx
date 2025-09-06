import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { MdDelete } from "react-icons/md";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { IoMdArchive } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";

function NoteDetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  if (!note) {
    return (
      <div>
        <h2>Catatan tidak ditemukan ❌</h2>
        <Link to="/" className="back-link"><IoArrowBackCircle />Kembali ke Beranda</Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteNote(id);
    navigate("/"); 
  };

  const handleArchiveToggle = () => {
    if (note.archived) {
      unarchiveNote(id);
      navigate("/arsip"); 
    } else {
      archiveNote(id);
      navigate("/");
    }
  };

  return (
    <div className="note-detail">
      <Link to="/" className="back-link"><IoArrowBackCircle /></Link>
      <h2>{note.title}</h2>
      <small>{new Date(note.createdAt).toLocaleString("id-ID")}</small>
      <p>{note.body}</p>

      <div className="note-actions">
        <button className="btn" onClick={handleArchiveToggle}>
          {note.archived ? <RiInboxUnarchiveFill /> : <IoMdArchive />}
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
            <MdDelete/>
        </button>
      </div>
    </div>
  );
}

export default NoteDetailPage;
