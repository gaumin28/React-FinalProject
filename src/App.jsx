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

function App() {
  const [isLogin, setIsLogIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        {/* <DiscoverPage /> */}
        {/* <AlbumPage /> */}
        {/* <ArtistPage /> */}
        {/* <RecentlyAdded /> */}
        {/* <MostPlayed /> */}
        {/* <YourPlaylist /> */}
        {/* {isLogin ? (
        <Home isLogin={isLogin} />
      ) : (
        <LoginPage handleLogin={() => setIsLogIn(true)} />
      )} */}
        {/* <FavouritePage /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        {/* <SignUpPage /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
