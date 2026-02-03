import Banner from "./Banner";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import SongList from "./SongList";
import Footer from "./Footer";
import { useLocation } from "react-router";
import genreSongs from "../data/genreSongs";

export default function GenrePlayer({
  isLogin,
  setIsLogIn,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  const location = useLocation();
  const idSelected = location.state?.id;
  const playlistSelected = genreSongs.find(
    (playlist) => String(playlist.id) === String(idSelected),
  );
  return (
    <>
      {/* <Header isLogin={isLogin} /> */}
      {/* <Sidebar isLogin={isLogin} /> */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <Navbar isLogin={isLogin} setIsLogIn={setIsLogIn} />

          {playlistSelected ? (
            <Banner
              image={playlistSelected.image}
              title={playlistSelected.name}
              songNumbers={playlistSelected.songs.length}
            />
          ) : (
            <div className="card-surface p-6 text-white/80">
              No genre selected.
            </div>
          )}

          <section>
            <h2 className="section-title">
              {playlistSelected?.name || "Genre"}{" "}
              <span className="text-pink-400">Songs</span>
            </h2>
            <div className="hidden md:flex justify-between text-white mb-2">
              <span className="md:w-1/2">Song</span>
              <span className="md:w-1/6 pl-2 mr-10">Release Date</span>
              <span className="md:w-1/3">Album</span>
              <span className="md:w-auto pr-5">Time</span>
            </div>
            <div className="space-y-3">
              {genreSongs
                .filter(
                  (playlist) => String(playlist.id) === String(idSelected),
                )
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
