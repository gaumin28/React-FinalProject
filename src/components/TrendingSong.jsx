import { allSongs } from "../data/songUtils";
import SongList from "./SongList";

export default function TrendingSong({
  currentPlayingId,
  setCurrentPlayingId,
}) {
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
        {allSongs.slice(0, 10).map((song, index) => (
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
            currentPlayingId={currentPlayingId}
            setCurrentPlayingId={setCurrentPlayingId}
          />
        ))}
      </div>
    </section>
  );
}
