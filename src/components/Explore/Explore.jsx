import { useState } from "react";
import "./Explore.css";
import { videos } from "../../db/db";
import { VideoCard } from "../VideoCard/VideoCard";
export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(videos);
  return (
    <div className="explore">
      <h3>Explore</h3>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
        type="text"
        placeholder="Search video by title"
      />
      <div className="explore-vid-container">
        {videos
          .filter((vid) =>
            vid.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((vid) => (
            <VideoCard key={vid._id} {...vid} />
          ))}
      </div>
    </div>
  );
};
