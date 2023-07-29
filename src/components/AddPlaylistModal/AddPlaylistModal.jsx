/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";

import "./AddPlaylistModal.css";
import { useState } from "react";
import { useAppContext } from "../../context/app-context";
export const AddPlaylistModal = ({ setShowAddPlaylistModal }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const { setPlaylist } = useAppContext();
  const updateInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addPlaylistHandler = (e) => {
    e.preventDefault();
    setPlaylist((prev) => [
      ...prev,
      { ...formData, videos: [], _id: prev.length + 1 },
    ]);
    setShowAddPlaylistModal(false);
  };
  return (
    <div>
      <div
        className="overlay"
        onClick={() => setShowAddPlaylistModal(false)}
      ></div>

      <div className="addPlaylistModal">
        <span
          onClick={() => setShowAddPlaylistModal(false)}
          className="close-btn"
        >
          <CloseIcon />
        </span>
        <h4>Add To Playlist</h4>
        <form onSubmit={addPlaylistHandler} method="POST">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={updateInput}
            name="title"
            required
          />
          <input
            type="text"
            placeholder="Description (Optional)"
            value={formData.description}
            onChange={updateInput}
            name="description"
          />
          <button>Create New Playlist</button>
        </form>
      </div>
    </div>
  );
};
