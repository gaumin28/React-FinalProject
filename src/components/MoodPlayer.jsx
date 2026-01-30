import Banner from "./Banner";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TrendingSong from "./TrendingSong";
import SongList from "./SongList";
import Footer from "./Footer";
import TrendingMusic from "../image/TrendingMusic.png";
import { useLocation } from "react-router-dom";
import moodPlaylist from "../data/moodPlaylist";

export default function MoodPlayer({
  isLogin,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  const location = useLocation();
  const idSelected = location.state?.id;
  const playlistSelected = moodPlaylist.find(
    (playlist) => playlist.id === idSelected,
  );
  return (
    <>
      {/* <Header isLogin={isLogin} /> */}
      {/* <Sidebar isLogin={isLogin} /> */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <Navbar isLogin={isLogin} />

          <Banner
            image={playlistSelected.image}
            title={playlistSelected.name}
            songNumbers={playlistSelected.songs.length}
          />

          <section>
            <h2 className="section-title">
              {playlistSelected.name}{" "}
              <span className="text-pink-400">Songs</span>
            </h2>
            <div className="hidden md:flex justify-between text-white mb-2">
              <span className="md:w-1/2">Song</span>
              <span className="md:w-1/6 pl-2 mr-10">Release Date</span>
              <span className="md:w-1/3">Album</span>
              <span className="md:w-auto pr-5">Time</span>
            </div>
            <div className="space-y-3">
              {moodPlaylist
                .filter((playlist) => playlist.id === idSelected)
                .flatMap((playlist) =>
                  playlist.songs.map((song, index) => (
                    <SongList
                      key={song.id}
                      id={song.id}
                      index={index}
                      image={song.image}
                      name={song.name}
                      duration={song.duration}
                      artist={song.artist || "Unknown"}
                      released={song.releaseDate || "N/A"}
                      album={song.album || "N/A"}
                      isLogin={isLogin}
                      currentPlayingId={currentPlayingId}
                      setCurrentPlayingId={setCurrentPlayingId}
                    />
                  )),
                )}
            </div>
          </section>
          <Footer isLogin={isLogin} />
        </div>
      </main>
    </>
  );
}
