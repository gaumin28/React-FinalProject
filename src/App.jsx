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
import themeColor from "./data/colorTheme";
import ContactPage from "./components/ContactPage";

function App() {
  const [isLogin, setIsLogIn] = useState(false);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const [isSidebar, setIsSidebar] = useState(false);
  const [idThemeSelected, setIdThemeSelected] = useState(11);
  useEffect(() => {
    const theme = themeColor.find((theme) => theme.id === idThemeSelected);
    document.body.className = `min-h-screen ${theme.style} text-white`;
  }, [idThemeSelected]);

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
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
                idThemeSelected={idThemeSelected}
                setIdThemeSelected={setIdThemeSelected}
              />
            }
          />
          <Route
            path="/discover"
            element={
              <DiscoverPage
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
                idThemeSelected={idThemeSelected}
                setIdThemeSelected={setIdThemeSelected}
              />
            }
          />
          <Route
            path="/album"
            element={
              <AlbumPage
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
                idThemeSelected={idThemeSelected}
                setIdThemeSelected={setIdThemeSelected}
              />
            }
          />
          <Route
            path="/artist"
            element={
              <ArtistPage
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
                idThemeSelected={idThemeSelected}
                setIdThemeSelected={setIdThemeSelected}
              />
            }
          />
          <Route
            path="/recently-added"
            element={
              <RecentlyAdded
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
                idThemeSelected={idThemeSelected}
                setIdThemeSelected={setIdThemeSelected}
              />
            }
          />
          <Route
            path="/most-played"
            element={
              <MostPlayed
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
                isLogin={isLogin}
                setIsLogIn={setIsLogIn}
                currentPlayingId={currentPlayingId}
                setCurrentPlayingId={setCurrentPlayingId}
                idThemeSelected={idThemeSelected}
                setIdThemeSelected={setIdThemeSelected}
              />
            }
          />
          <Route
            path="/your-playlist"
            element={
              <YourPlaylist
                isSidebar={isSidebar}
                setIsSidebar={setIsSidebar}
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
          <Route path="/contact" element={<ContactPage />} />
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
