import { useAppContext } from "../../context/app-context";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import "./Playlist.css";
import { useState } from "react";
import { AddPlaylistModal } from "../AddPlaylistModal/AddPlaylistModal";
import { profile } from "../../db/db";
import { Link } from "react-router-dom";

export const Playlist = () => {
  const [showAddPlaylistModal, setShowAddPlaylistModal] = useState(false);
  const { playlist, setPlaylist } = useAppContext();

  const removePlaylist = (id) => {
    console.log(id);
    setPlaylist((prev) => prev.filter((playlist) => playlist._id !== id));
  };
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      {playlist.length > 0 ? (
        <div className="playlist-container">
          {playlist.map(({ _id, title, videos, description }) => (
            <div className="video-card" key={_id}>
              <span className="close-btn" onClick={() => removePlaylist(_id)}>
                <CloseIcon />
              </span>
              <Link to={`/playlist/${_id}`}>
                <img src={videos[0]?.thumbnail || profile} alt="thumbnail" />{" "}
                <b>{title}</b>
                <br />
                <span>{description}</span>
              </Link>
            </div>
          ))}
          <div className="add-playlist">
            <span onClick={() => setShowAddPlaylistModal(true)}>
              <AddCircleOutlineIcon fontSize="large" />
            </span>
          </div>
        </div>
      ) : (
        <>
          <h2>Create your first playlist </h2>{" "}
          <div className="add-playlist">
            <span onClick={() => setShowAddPlaylistModal(true)}>
              <AddCircleOutlineIcon fontSize="large" />
            </span>
          </div>
        </>
      )}
      {showAddPlaylistModal && (
        <AddPlaylistModal setShowAddPlaylistModal={setShowAddPlaylistModal} />
      )}
    </div>
  );
};
