import { Link, useParams } from "react-router-dom";
import { profile, videos } from "../../db/db";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./SingleVideo.css";
import { useAppContext } from "../../context/app-context";
import {
  useAddToWatchLater,
  useRemoveFromWatchLater,
} from "../../hooks/actions";
import { useState } from "react";
import { AddToPlaylistModal } from "../AddToPlaylistModal/AddToPlaylistModal";
import { AddNoteModal } from "../AddNoteModal/AddNoteModal";
import { EditNoteModal } from "../EditNoteModal/EditNoteModal";

export const SingleVideo = () => {
  const { id } = useParams();
  const videoDetails = videos.find(({ _id }) => _id == id);
  const { _id, src, title } = videoDetails;
  const { watchLaterList } = useAppContext();
  const inWatchLater = watchLaterList.find((_id) => id == _id);
  const addToWishList = useAddToWatchLater();
  const removeFromWishList = useRemoveFromWatchLater();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const { notes, setNotes } = useAppContext();
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };
  const [showEditNoteModal, setShowEditNoteModal] = useState({
    noteId: 0,
    state: false,
  });

  return (
    <div className="video-page">
      {videoDetails && (
        <div className="single-video-container">
          <div className="video-wrapper">
            <iframe
              width="800"
              height="415"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="video-details">
              <div>
                <img className="profile-pic" src={profile} alt="profile" />
                <b>{title}</b>
              </div>
              <div>
                {inWatchLater ? (
                  <span onClick={() => removeFromWishList(_id)}>
                    <WatchLaterRoundedIcon />
                  </span>
                ) : (
                  <span onClick={() => addToWishList(_id)}>
                    <WatchLaterOutlinedIcon />
                  </span>
                )}
                <span className="playlist-btn">
                  <span
                    onClick={() => setShowAddToPlaylistModal((prev) => !prev)}
                  >
                    <PlaylistAddRoundedIcon />
                  </span>
                  {showAddToPlaylistModal && (
                    <AddToPlaylistModal
                      setShowAddToPlaylistModal={setShowAddToPlaylistModal}
                      video={videoDetails}
                    />
                  )}
                </span>
                <span className="playlist-btn">
                  <span onClick={() => setShowAddNoteModal((prev) => !prev)}>
                    <EditNoteIcon />
                  </span>
                  {showAddNoteModal && (
                    <AddNoteModal
                      setShowAddNoteModal={setShowAddNoteModal}
                      videoId={_id}
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
          <hr />
          <h3>My notes</h3>
          {showEditNoteModal.state && (
            <EditNoteModal
              showEditNoteModal={showEditNoteModal}
              setShowEditNoteModal={setShowEditNoteModal}
              videoId={_id}
            />
          )}
          <div className="notes-container">
            {notes.map(({ note, id }) => (
              <div key={id} className="note">
                <b>{note}</b>
                <div className="note-actions">
                  <span
                    onClick={() =>
                      setShowEditNoteModal({ noteId: id, state: true })
                    }
                  >
                    <EditIcon />
                  </span>

                  <span onClick={() => deleteNote(id)}>
                    <DeleteIcon />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="suggestion-vid">
        <h4>More videos</h4>
        {videos.slice(0, 5).map((video) => (
          <Link
            to={`/video/${video._id}`}
            className="horizontal-card"
            key={video._id}
          >
            <img src={video.thumbnail} alt="thumbnail" />
            <div>
              <b>{video.title}</b> <br />
              <small>{video.creator}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
