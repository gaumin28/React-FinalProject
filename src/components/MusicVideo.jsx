import musicVideo from "../data/musicVideo";
import VideoCard from "./VideoCard";

export default function MusicVideo() {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold">
        Music <span className="text-pink-400">Video</span>
      </h2>
      <div className="flex flex-col items-center flex-wrap gap-4 mt-6 md:flex-row">
        {musicVideo.map((song) => (
          <VideoCard
            key={song.id}
            id={song.id}
            name={song.title}
            artist={song.artist}
            image={song.image}
            view={song.views}
            video={song.video}
          />
        ))}
      </div>
    </section>
  );
}
