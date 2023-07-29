import { videos } from "../../db/db";
import { useParams } from "react-router-dom";
import "./VideoListing.css";
import { VideoCard } from "../VideoCard/VideoCard";
export const VideoListing = () => {
  const { category } = useParams();
  return (
    <div className="video-listing">
      <h2>{category}</h2>
      <div className="video-container">
        {videos
          .filter((video) => video.category === category)
          .map((video) => (
            <VideoCard key={video._id} {...video} />
          ))}
      </div>
    </div>
  );
};
