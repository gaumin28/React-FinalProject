import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SongList from "./SongList";
import { allSongs } from "../data/songUtils";
import NewRelease from "../image/New-Release.png";

function TrendingSong() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        Trending <span className="text-pink-400">Songs</span>
      </h2>
      <div className="hidden md:flex justify-between text-white mb-2">
        <span className="md:w-1/2">Song</span>
        <span className="md:w-1/6 pl-2 mr-10">Release Date</span>
        <span className="md:w-1/3">Album</span>
        <span className="md:w-auto pr-5">Time</span>
      </div>
      <div className="space-y-3">
        {allSongs
          .filter((song) => song.source === "newRelease")
          .map((song, index) => (
            <SongList
              key={song.uniqueId}
              id={song.uniqueId}
              index={index}
              image={song.image}
              name={song.name}
              duration={song.duration}
              artist={song.artist}
              released={song.releaseDate}
              album={song.album}
            />
          ))}
      </div>
    </section>
  );
}

export default function RecentlyAdded({ isLogin }) {
  const newReleaseSongs = allSongs.filter(
    (song) => song.source === "newRelease",
  );

  const songNames = newReleaseSongs
    .filter((song, index) => index < 7)
    .reduce((acc, song, index) => {
      return acc + (index > 0 ? ", " : "") + song.name;
    }, "");

  // Convert MM:SS to total seconds and sum
  const totalSeconds = newReleaseSongs.reduce((acc, song) => {
    const [minutes, seconds] = song.duration.split(":").map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  // Convert to MM:SS
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const totalDuration = `${hours}h:${String(minutes).padStart(2, "0")}m:${String(seconds).padStart(2, "0")}s`;
  return (
    <>
      <Header isLogin={isLogin} />
      <Sidebar isLogin={isLogin} />
      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} />
        <div className="max-w-5xl mx-auto">
          <Banner
            songNames={songNames}
            s
            totalDuration={totalDuration}
            songNumbers={newReleaseSongs.length}
            title={"Recently Added Song"}
            image={NewRelease}
          />
          <TrendingSong />
          <Footer isLogin={isLogin} />
        </div>
      </main>
    </>
  );
}
