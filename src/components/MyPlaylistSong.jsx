import SongList from "./SongList";
import { getSongsByIds } from "../data/songUtils";
import { useEffect, useState } from "react";
import { getFavorites } from "../utils/favoritesManager";

export default function MyPlaylistSong({
  currentPlayingId,
  setCurrentPlayingId,
}) {
  const [favouriteSongs, setFavouriteSongs] = useState([]);

  useEffect(() => {
    const loadFavourites = () => {
      const favoriteIds = getFavorites();
      const songDetails = getSongsByIds(favoriteIds);
      setFavouriteSongs(songDetails);
    };

    loadFavourites();

    // Listen for custom event and storage changes
    window.addEventListener("favoritesChanged", loadFavourites);
    window.addEventListener("storage", loadFavourites);

    return () => {
      window.removeEventListener("favoritesChanged", loadFavourites);
      window.removeEventListener("storage", loadFavourites);
    };
  }, []);
  return (
    <section>
      <h2 className="text-2xl font-bold">
        My <span className="text-pink-400">Playlist</span>
      </h2>
      <div className="hidden md:flex justify-between text-white mb-2">
        <span className="md:w-1/2">Song</span>
        <span className="md:w-1/6 pl-2 mr-10">Release Date</span>
        <span className="md:w-1/3">Album</span>
        <span className="md:w-auto pr-5">Time</span>
      </div>
      <div className="space-y-3">
        {favouriteSongs.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            No favorite songs yet
          </p>
        ) : (
          favouriteSongs.map((song, index) => (
            <SongList
              key={song.id}
              id={song.id}
              index={index}
              image={song.image}
              name={song.name}
              duration={song.duration || "N/A"}
              artist={song.artist}
              released={song.releaseDate || "N/A"}
              album={song.album || "N/A"}
              currentPlayingId={currentPlayingId}
              setCurrentPlayingId={setCurrentPlayingId}
            />
          ))
        )}
      </div>
    </section>
  );
}
