import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const watchLaterListInit =
    JSON.parse(localStorage.getItem("watchLaterList")) || [];
  const [watchLaterList, setWatchLaterList] = useState(watchLaterListInit);

  const playlistInit = JSON.parse(localStorage.getItem("playlist")) || [
    {
      _id: 0,
      title: "Music Videos",
      description: "my personal fav",
      videos: [
        {
          _id: 19,
          title: "Origami Swan - Simple and Elegant",
          views: 2879,
          chips: ["origami", "swan", "paper", "elegant"],
          thumbnail: "https://picsum.photos/300/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Origami",
          creator: "PaperCraftPro",
        },
        {
          _id: 20,
          title: "Origami Swan - Simple and Elegant",
          views: 2879,
          chips: ["origami", "swan", "paper", "elegant"],
          thumbnail: "https://picsum.photos/300/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Origami",
          creator: "PaperCraftPro",
        },
      ],
    },
  ];
  const [playlist, setPlaylist] = useState(playlistInit);
  const notesInit = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(notesInit);
  console.log(notes);
  const value = {
    watchLaterList,
    setWatchLaterList,
    playlist,
    setPlaylist,
    notes,
    setNotes,
  };

  useEffect(() => {
    localStorage.setItem("watchLaterList", JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
