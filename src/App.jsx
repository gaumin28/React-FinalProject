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

function App() {
  const [isLogin, setIsLogIn] = useState(false);
  return (
    <>
      {/* <DiscoverPage /> */}
      {/* <AlbumPage /> */}
      {/* <ArtistPage /> */}
      {/* <RecentlyAdded /> */}
      {/* <MostPlayed /> */}
      {/* <YourPlaylist /> */}
      {isLogin ? (
        <Home isLogin={isLogin} />
      ) : (
        <LoginPage handleLogin={() => setIsLogIn(true)} />
      )}

      {/* <SignUpPage /> */}
    </>
  );
}

export default App;
