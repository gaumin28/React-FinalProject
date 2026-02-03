import { useLocation } from "react-router";
import Artist from "./Artist";
import Card from "./Card";
import popularArtists from "../data/popularArtist";
import mySongList from "../data/mySongList";

export default function SongCardPage() {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const isLogin = location.state?.isLogin;

  const hasArrayQuery = Array.isArray(searchQuery);
  const searchText = hasArrayQuery ? "" : searchQuery;

  const matchedArtists = hasArrayQuery
    ? searchQuery
    : getMatchedArtistsByQuery(searchText);
  const matchedSongs = getMatchedSongsByQuery(searchText);

  if (!matchedArtists.length && !matchedSongs.length) {
    return (
      <section className="max-w-5xl mx-auto p-4 md:p-6">
        <h2 className="section-title text-white">Search Results</h2>
        <p className="text-white/70 mt-4">No results found.</p>
      </section>
    );
  }

  const normalizedMatches = matchedArtists.map((name) => normalizeName(name));

  const matchedPopularArtists = popularArtists.filter((artist) =>
    normalizedMatches.includes(normalizeName(artist.name)),
  );

  const normalizedSongMatches = matchedSongs.map((name) => normalizeName(name));
  const matchedSongItems = dedupeSongs(
    mySongList.filter((song) =>
      normalizedSongMatches.includes(normalizeName(song.name)),
    ),
  );

  return (
    <section className="max-w-5xl mx-auto p-4 md:p-6">
      <h2 className="section-title text-white">Search Results</h2>

      {matchedSongItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-white mb-3">Songs</h3>
          <div className="flex flex-wrap gap-4">
            {matchedSongItems.map((song, index) => (
              <Card
                key={`${song.id}-${normalizeName(song.name)}-${normalizeName(
                  song.artist,
                )}-${index}`}
                id={song.id}
                name={song.name}
                artist={song.artist}
                image={song.image}
                isLogin={isLogin}
              />
            ))}
          </div>
        </div>
      )}

      {matchedPopularArtists.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-white mb-3">Artists</h3>
          <div className="flex flex-wrap gap-4">
            {matchedPopularArtists.map((artist, index) => (
              <Artist
                key={`${artist.id}-${normalizeName(artist.name)}-${index}`}
                id={artist.id}
                image={artist.image}
                name={artist.name}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function getMatchedArtistsByQuery(searchText) {
  const query = String(searchText || "")
    .toLowerCase()
    .trim();
  if (!query) return [];

  const matches = mySongList
    .map((song) => song?.artist)
    .filter(Boolean)
    .filter((artist) => artist.toLowerCase().includes(query));

  return Array.from(new Set(matches));
}

function getMatchedSongsByQuery(searchText) {
  const query = String(searchText || "")
    .toLowerCase()
    .trim();
  if (!query) return [];

  const matches = mySongList
    .map((song) => song?.name)
    .filter(Boolean)
    .filter((name) => name.toLowerCase().includes(query));

  return Array.from(new Set(matches));
}

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function dedupeSongs(songs) {
  const seen = new Set();
  const unique = [];

  for (const song of songs) {
    const key = `${normalizeName(song?.name)}::${normalizeName(song?.artist)}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(song);
    }
  }

  return unique;
}
