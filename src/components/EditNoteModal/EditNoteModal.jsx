/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./EditNoteModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../context/app-context";

export const EditNoteModal = ({
  showEditNoteModal,
  videoId,
  setShowEditNoteModal,
}) => {
  const { notes, setNotes } = useAppContext();

  const selectedNote = notes.find(
    (note) => note.noteId === showEditNoteModal.id
  );
  const [newNote, setNewNote] = useState("");
  const editNoteHandler = (e) => {
    e.preventDefault;
    setNotes((prev) =>
      prev.map((not) => (not.id === id ? { note: newNote, videoId } : not))
    );
  };

  return (
    <div className="addNoteModal" id="editNoteModal">
      <span className="close-btn" onClick={() => setShowEditNoteModal(false)}>
        <CloseIcon />
      </span>
      <form onSubmit={editNoteHandler} action="">
        <input
          type="text"
          defaultValue={selectedNote.note}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="New Note"
        />
        <button>Add new note</button>
      </form>
    </div>
  );
};
