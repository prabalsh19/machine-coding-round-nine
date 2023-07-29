/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddNoteModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../context/app-context";

export const AddNoteModal = ({ setShowAddNoteModal, videoId }) => {
  const [note, setNote] = useState("");
  const { setNotes } = useAppContext();
  const addNoteHandler = (e) => {
    e.preventDefault();
    setNotes((prev) => [...prev, { note, videoId, id: prev.length + 1 }]);
  };
  return (
    <div className="addNoteModal">
      <span className="close-btn" onClick={() => setShowAddNoteModal(false)}>
        <CloseIcon />
      </span>
      <form onSubmit={addNoteHandler} action="">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="New Note"
        />
        <button>Add new note</button>
      </form>
    </div>
  );
};
