import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/app-context";
import { VideoCard } from "../VideoCard/VideoCard";
import CloseIcon from "@mui/icons-material/Close";
import { useRemoveFromPlaylist } from "../../hooks/actions";

export const PlaylistVideoListing = () => {
  const { id } = useParams();
  const { playlist } = useAppContext();
  const playlistSelected = playlist.find((playlist) => playlist._id == id);
  const { title, videos } = playlistSelected;
  const removeFromPlaylist = useRemoveFromPlaylist();
  return (
    <div className="video-listing">
      <h2>{title}</h2>
      <div className="video-container">
        {videos.length === 0 ? (
          <h2>Empty Playlist</h2>
        ) : (
          videos.map((video) => (
            <div key={video._id}>
              <span
                onClick={() =>
                  removeFromPlaylist(playlistSelected._id, video._id)
                }
              >
                <CloseIcon />
              </span>
              <VideoCard {...video} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
