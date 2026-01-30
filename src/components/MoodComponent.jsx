import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SongList from "./SongList";
import NewRelease from "../image/New-Release.png";
import moodPlaylist from "../data/moodPlaylist";

function TrendingSong() {
  return (
    <section>
      <h2 className="section-title">
        Trending <span className="text-pink-400">Songs</span>
      </h2>
      <div className="hidden md:flex justify-between text-white mb-2">
        <span className="md:w-1/2">Song</span>
        <span className="md:w-1/6 pl-2 mr-10">Release Date</span>
        <span className="md:w-1/3">Album</span>
        <span className="md:w-auto pr-5">Time</span>
      </div>
      <div className="space-y-3">
        {moodPlaylist.map((song) => (
          <SongList
            key={song.id}
            id={song.id}
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

export default function RecentlyAdded() {
  //   const songNames = newReleaseSong
  //     .filter((id) => id < 7)
  //     .reduce((acc, song, index) => {
  //       return acc + (index > 0 ? ", " : "") + song.name;
  //     }, "");

  // Convert MM:SS to total seconds and sum
  const totalSeconds = moodPlaylist.reduce((acc, song) => {
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
      <Header />
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <Banner
            // songNames={songNames}
            totalDuration={totalDuration}
            songNumbers={moodPlaylist.length}
            title={"Recently Added Song"}
            image={NewRelease}
          />
          <TrendingSong />
          <Footer />
        </div>
      </main>
    </>
  );
}
