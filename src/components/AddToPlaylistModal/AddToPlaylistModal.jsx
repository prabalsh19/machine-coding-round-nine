import { useState } from "react";
import "./AddToPlaylistModal.css";
import { useAppContext } from "../../context/app-context";
import { useAddToPlaylist } from "../../hooks/actions";

export const AddToPlaylistModal = ({ setShowAddToPlaylistModal, video }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const { playlist, setPlaylist } = useAppContext();
  const updateInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addPlaylistHandler = (e) => {
    e.preventDefault();
    setPlaylist((prev) => [
      ...prev,
      { ...formData, videos: [], _id: prev.length + 1 },
    ]);
    setShowAddToPlaylistModal(false);
  };
  const addVideoToPlaylist = useAddToPlaylist();
  return (
    <div className="addToPlaylistModal">
      <b>Add to playlist</b>
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
      <hr />
      {playlist.slice(0, 3).map(({ _id, title }) => (
        <>
          <b
            onClick={() => addVideoToPlaylist(_id, video)}
            className="playlist-name"
            key={_id}
          >
            {title}
          </b>
          <br />
        </>
      ))}
    </div>
  );
};
