import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import DiscoverPage from "./components/DiscoverPage";
import Home from "./components/Home";
import RecentlyAdded from "./components/RecentlyAdded";
import MostPlayed from "./components/MostPlayed";
import YourPlaylist from "./components/YourPlaylist";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { useState } from "react";
import FavouritePage from "./components/FavouritePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPage from "./components/MusicPage";
import LoadingPage from "./components/LoadinPage";

function App() {
  const [isLogin, setIsLogIn] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);

  return (
    <>
      <BrowserRouter>
        {/* <YourPlaylist /> */}
        {/* {isLogin ? (
        <Home isLogin={isLogin} />
      ) : (
        <LoginPage handleLogin={() => setIsLogIn(true)} />
      )} */}
        {/* <FavouritePage /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/discover"
            element={<DiscoverPage isLogin={isLogin} setIsLogIn={setIsLogIn} />}
          />
          <Route
            path="/album"
            element={
              <AlbumPage
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/artist"
            element={
              <ArtistPage
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/recently-added"
            element={
              <RecentlyAdded
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/most-played"
            element={
              <MostPlayed
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/your-playlist"
            element={
              <YourPlaylist
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/login"
            element={<LoginPage isLogin={isLogin} setIsLogIn={setIsLogIn} />}
          />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/play-music" element={<MusicPage />} />
        </Routes>
        {/* <SignUpPage /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
