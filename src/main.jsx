import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Categories } from "./components/Categories/Categories.jsx";
import { VideoListing } from "./components/VideoListing/VideoListing.jsx";
import { AppContextProvider } from "./context/app-context.jsx";
import { SingleVideo } from "./components/SingleVideo/SingleVideo.jsx";
import { WatchLater } from "./components/WatchLater/WatchLater.jsx";
import { Explore } from "./components/Explore/Explore.jsx";
import { Playlist } from "./components/Playlist/Playlist.jsx";
import { PlaylistVideoListing } from "./components/PlaylistVideoListing/PlaylistVideoListing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Categories /> },
      {
        path: "/categories/:category",
        element: <VideoListing />,
      },
      {
        path: "/video/:id",
        element: <SingleVideo />,
      },
      { path: "/watch-later", element: <WatchLater /> },
      { path: "/explore", element: <Explore /> },
      { path: "/playlist", element: <Playlist /> },
      { path: "/playlist/:id", element: <PlaylistVideoListing /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
