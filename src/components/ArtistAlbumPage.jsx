import Banner from "./Banner";

import Navbar from "./Navbar";

import SongList from "./SongList";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

export default function ArtistAlbumPage({
  isLogin,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  const location = useLocation();

  const album = location.state?.album;

  return (
    <>
      {/* <Header isLogin={isLogin} /> */}
      {/* <Sidebar isLogin={isLogin} /> */}
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <Navbar isLogin={isLogin} />

          <Banner
            image={album?.image}
            title={album?.name}
            songNumbers={album?.songs?.length || 0}
          />

          <section>
            <h2 className="text-2xl font-bold">
              {album?.name}
              <span className="text-pink-400"> Songs</span>
            </h2>
            <div className="hidden md:flex justify-between text-white mb-2">
              <span className="md:w-1/2">Song</span>
              <span className="md:w-1/6 pl-2 mr-10">Release Date</span>
              <span className="md:w-1/3">Album</span>
              <span className="md:w-auto pr-5">Time</span>
            </div>
            <div className="space-y-3">
              {album?.songs?.map((song, index) => (
                <SongList
                  key={song.id}
                  id={song.id}
                  index={index}
                  image={song.image}
                  name={song.name}
                  duration={song.duration}
                  artist={song.artist || "Unknown"}
                  released={song.releaseDate || "N/A"}
                  album={album?.name || "N/A"}
                  isLogin={isLogin}
                  currentPlayingId={currentPlayingId}
                  setCurrentPlayingId={setCurrentPlayingId}
                />
              ))}
            </div>
          </section>
          <Footer isLogin={isLogin} />
        </div>
      </main>
    </>
  );
}
