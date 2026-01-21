import Sidebar from "./Sidebar";
import SlideImg from "./SlideImg";
import Footer from "./Footer";
import Header from "./Header";
import MoodPlaylist from "./MoodPlaylist";
import MusicVideo from "./MusicVideo";
import Navbar from "./Navbar";
import NewReleaseSong from "./NewReleaseSong";
import PopularArtist from "./PopularArtist";
import TrendingSong from "./TrendingSong";
import WeeklyTopSong from "./WeeklyTopSong";

export default function Home({
  isLogin,
  setIsLogIn,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  return (
    <>
      <Header isLogin={isLogin} setIsLogIn={setIsLogIn} />
      <Sidebar isLogin={isLogin} />
      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} setIsLogIn={setIsLogIn} />
        <SlideImg />
        {/* content section */}
        <div className="max-w-5xl mx-auto mt-10 space-y-10">
          <WeeklyTopSong />
          <NewReleaseSong />
          <TrendingSong
            currentPlayingId={currentPlayingId}
            setCurrentPlayingId={setCurrentPlayingId}
          />
          <PopularArtist />
          <MusicVideo />
          <MoodPlaylist />
          <Footer />
        </div>
      </main>
    </>
  );
}
