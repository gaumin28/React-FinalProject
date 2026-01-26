import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import DiscoverPage from "./components/DiscoverPage";
import Home from "./components/Home";
import RecentlyAdded from "./components/RecentlyAdded";
import MostPlayed from "./components/MostPlayed";
import YourPlaylist from "./components/YourPlaylist";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { useState, useEffect, useRef } from "react";
import FavouritePage from "./components/FavouritePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import MusicPage from "./components/MusicPage";
import LoadingPage from "./components/LoadinPage";
import MoodPlayer from "./components/MoodPlayer";
import ArtistAlbumPage from "./components/ArtistAlbumPage";
import ForgotPassword from "./components/ForgotPassword";
import FacebookPage from "./components/FacebookPage";
import MVPlayer from "./components/MVPlayer";
import GenrePlayer from "./components/GenrePlayer";

function App() {
  const [isLogin, setIsLogIn] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);

  return (
    <>
      <BrowserRouter>
        {/** Reset currently playing song when route changes */}
        <RouteChangeReset onRouteChange={() => setCurrentPlayingId(null)} />
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
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/play-music" element={<MusicPage />} />
          <Route
            path="/mood-player"
            element={
              <MoodPlayer
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/artist-album"
            element={
              <ArtistAlbumPage
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
          <Route
            path="/mv-player"
            element={<MVPlayer isLogin={isLogin} setIsLogIn={setIsLogIn} />}
          />
          <Route
            path="/genre-player"
            element={
              <GenrePlayer
                isLogin={isLogin}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
              />
            }
          />
        </Routes>

        {/* <SignUpPage /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

function RouteChangeReset({ onRouteChange }) {
  const location = useLocation();
  const cbRef = useRef(onRouteChange);
  // Keep a stable dependency size by storing callback in a ref
  useEffect(() => {
    cbRef.current = onRouteChange;
  }, [onRouteChange]);
  useEffect(() => {
    cbRef.current?.();
  }, [location.pathname]);
  return null;
}
