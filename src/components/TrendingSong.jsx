import SongList from "./SongList";
import songList from "../data/songList";

export default function TrendingSong({
  currentPlayingId,
  setCurrentPlayingId,
  isLogin,
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
        {songList.map((song, index) => (
          <SongList
            key={song.id}
            id={song.id}
            index={index}
            image={song.image}
            name={song.name}
            duration={song.duration}
            artist={song.artist}
            released={song.releaseDate}
            album={song.album}
            isLogin={isLogin}
            currentPlayingId={currentPlayingId}
            setCurrentPlayingId={setCurrentPlayingId}
          />
        ))}
      </div>
    </section>
  );
}
