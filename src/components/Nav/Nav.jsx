import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import "./Nav.css";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <HomeRoundedIcon /> <span>Home</span>
      </NavLink>
      <NavLink to={"/explore"}>
        <ExploreRoundedIcon /> <span>Explore</span>
      </NavLink>
      <NavLink to={"/playlist"}>
        <PlaylistAddRoundedIcon /> <span>Playlists</span>
      </NavLink>
      <NavLink to={"/watch-later"}>
        <WatchLaterRoundedIcon /> <span>Watch Later</span>
      </NavLink>
    </nav>
  );
};
