import { useAppContext } from "../../context/app-context";
import { videos } from "../../db/db";
import { VideoCard } from "../VideoCard/VideoCard";
import "./WatchLater.css";

export const WatchLater = () => {
  const { watchLaterList } = useAppContext();
  const watchLaterVideo = videos.filter((video) =>
    watchLaterList.some((_id) => _id === video._id)
  );

  return (
    <div className="watch-later">
      <h2>Watch Later</h2>
      {watchLaterVideo.length > 0 ? (
        <div className="watch-later-container">
          {watchLaterVideo.map((vid) => (
            <VideoCard key={vid._id} {...vid} />
          ))}
        </div>
      ) : (
        <h3>No video added to watch later yet</h3>
      )}
    </div>
  );
};
