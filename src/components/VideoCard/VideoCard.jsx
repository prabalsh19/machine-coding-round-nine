/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context";
import { profile } from "../../db/db";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import {
  useAddToWatchLater,
  useRemoveFromWatchLater,
} from "../../hooks/actions";

export const VideoCard = ({
  _id,
  thumbnail,
  title,
  category,
  views,
  creator,
}) => {
  const { watchLaterList } = useAppContext();

  const inWatchLater = watchLaterList.find((id) => id == _id);
  const removeFromWishList = useRemoveFromWatchLater();
  const addToWishList = useAddToWatchLater();
  return (
    <div className="video-card" key={_id}>
      {inWatchLater ? (
        <span
          className="watch-later-cta"
          onClick={() => removeFromWishList(_id)}
        >
          <WatchLaterRoundedIcon />
        </span>
      ) : (
        <span className="watch-later-cta" onClick={() => addToWishList(_id)}>
          <WatchLaterOutlinedIcon />
        </span>
      )}
      <Link to={`/video/${_id}`}>
        <img src={thumbnail} alt="thumbnail" />
        <div className="video-info">
          <img className="profile-pic" src={profile} alt="" />
          <div>
            <b>{title}</b> <br />
            <b>{category}</b> <br />
            <small>
              {views} views | {creator}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
};
