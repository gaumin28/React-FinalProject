import moodPlaylist from "../data/moodPlaylist";
import PlaylistCard from "./PlaylistCard";

export default function MoodPlaylist() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        Mood <span className="text-pink-400">Playlists</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {moodPlaylist.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.name}
            image={playlist.image}
          />
        ))}
      </div>
    </section>
  );
}
