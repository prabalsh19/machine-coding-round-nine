import { useAppContext } from "../context/app-context";

export const useAddToWatchLater = () => {
  const { setWatchLaterList } = useAppContext();
  return (_id) => {
    setWatchLaterList((prev) => [...prev, _id]);
  };
};
export const useRemoveFromWatchLater = () => {
  const { setWatchLaterList } = useAppContext();
  return (_id) => {
    setWatchLaterList((prev) => prev.filter((id) => id !== _id));
  };
};
export const useRemoveFromPlaylist = () => {
  const { setPlaylist } = useAppContext();
  return (playlistId, videoId) => {
    setPlaylist((prev) =>
      prev.map((playlist) => {
        return playlist._id == playlistId
          ? {
              ...playlist,
              videos: playlist.videos.filter((video) => {
                return video._id !== videoId;
              }),
            }
          : playlist;
      })
    );
  };
};
export const useAddToPlaylist = () => {
  const { setPlaylist } = useAppContext();
  return (playlistId, video) => {
    setPlaylist((prev) =>
      prev.map((playlist) => {
        return playlist._id == playlistId
          ? {
              ...playlist,
              videos: [...playlist.videos, video],
            }
          : playlist;
      })
    );
  };
};
