import popularArtists from "../data/popularArtist";
import Artist from "./Artist";

export default function PopularArtist() {
  return (
    <section>
      <h2 className="section-title">
        Popular <span className="text-pink-400">Artists</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {popularArtists.map((artist) => (
          <Artist
            key={artist.id}
            id={artist.id}
            songIds={artist.songs.map((song) => song.id)}
            name={artist.name}
            image={artist.image}
          />
        ))}
      </div>
    </section>
  );
}
