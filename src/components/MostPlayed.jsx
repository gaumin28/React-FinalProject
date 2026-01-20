import songList from "../data/songList";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TrendingSong from "./TrendingSong";
import MostViewSongs from "../image/MostViewSongs.png";

export default function RecentlyAdded() {
  const songNames = songList
    .filter((id) => id < 7)
    .reduce((acc, song, index) => {
      return acc + (index > 0 ? ", " : "") + song.name;
    }, "");

  // Convert MM:SS to total seconds and sum
  const totalSeconds = songList.reduce((acc, song) => {
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
            songNames={songNames}
            songNumbers={songList.length}
            totalDuration={totalDuration}
            title={"Most Played Song"}
            image={MostViewSongs}
          />
          <TrendingSong />
          <Footer />
        </div>
      </main>
    </>
  );
}
