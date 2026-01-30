import moodPlaylist from "../data/moodPlaylist";
import MoodSongCard from "./MoodSongCard";

export default function MoodPlaylist() {
  return (
    <section>
      <h2 className="section-title">
        Mood <span className="text-pink-400">Playlists</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {moodPlaylist.map((playlist, index) => (
          <MoodSongCard
            key={playlist.id}
            index={index}
            id={playlist.id}
            title={playlist.name}
            image={playlist.image}
          />
        ))}
      </div>
    </section>
  );
}
