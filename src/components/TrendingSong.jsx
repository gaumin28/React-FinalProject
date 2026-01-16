import SongList from "./SongList";

export default function TrendingSong() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        Trending <span className="text-pink-400">Songs</span>
      </h2>
      <div className="hidden md:flex justify-between text-white mb-2">
        <span className="md:w-1/2">Song</span>
        <span className="md:w-1/6 pl-2">Release Date</span>
        <span className="md:w-1/3">Album</span>
        <span className="md:w-auto pr-5">Time</span>
      </div>
      <div className="space-y-3">
        <SongList />
      </div>
    </section>
  );
}
