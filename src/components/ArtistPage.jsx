import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ArtistBanner from "./ArtistBanner";
import Card from "./Card";
import Artist from "./Artist";
import Footer from "./Footer";
import PopularSongList from "./PopularSongList";
import popularArtists from "../data/popularArtist";
import { useMemo } from "react";
import { useLocation } from "react-router";

export default function ArtistPage({
  isLogin,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const selectedId = location.state?.selectedId;

  // Compute artist index directly from location state
  const selectedArtistIndex = useMemo(() => {
    if (selectedId) {
      const index = popularArtists.findIndex(
        (artist) => artist.id === selectedId,
      );
      return index !== -1 ? index : 3;
    }
    if (searchQuery) {
      const index = popularArtists.findIndex(
        (artist) => artist.name.toLowerCase() === searchQuery.toLowerCase(),
      );
      return index !== -1 ? index : 3;
    }
    return 3;
  }, [selectedId, searchQuery]);
  const newData = popularArtists.toSpliced(selectedArtistIndex, 1);
  const artistSelected = popularArtists[selectedArtistIndex];
  return (
    <>
      <Header isLogin={isLogin} />
      <Sidebar isLogin={isLogin} />
      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} />
        <div className="max-w-5xl mx-auto">
          <ArtistBanner selectedArtistIndex={selectedArtistIndex} />
          <section className="mt-8">
            <h2 className="text-2xl text-white font-bold mb-4">Popular</h2>

            <div className="hidden md:grid md:grid-cols-12 gap-4 text-white mb-2">
              <div className="md:col-span-5">Song</div>
              <div className="md:col-span-3">Release Date</div>
              <div className="md:col-span-2">Played</div>
              <div className="md:col-span-2 text-right pr-4">Time</div>
            </div>
          </section>

          {artistSelected.songs.map((song, index) => (
            <PopularSongList
              key={song.id}
              index={index}
              id={song.id}
              name={song.name}
              artist={song.artist}
              release={song.releaseDate}
              views={song.views}
              duration={song.duration}
              image={song.image}
              isLogin={isLogin}
              currentPlayingId={currentPlayingId}
              setCurrentPlayingId={setCurrentPlayingId}
            />
          ))}
          <section>
            <h2 className="text-2xl font-bold mt-5">
              Artist's <span className="text-pink-400">Albums</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {artistSelected.albums.map((album) => (
                <Card
                  key={album.id}
                  name={album.name}
                  artist={album.artist}
                  image={album.image}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-5">
              Single <span className="text-pink-400">Songs</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {artistSelected.songs
                .filter((_, index) => index < 6)
                .map((song) => (
                  <Card
                    key={song.id}
                    name={song.name}
                    artist={song.artist}
                    image={song.image}
                  />
                ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mt-5">
              Recommended <span className="text-pink-400">Artists</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {newData.map((artist) => (
                <Artist
                  key={artist.id}
                  id={artist.id}
                  image={artist.image}
                  name={artist.name}
                />
              ))}
            </div>
          </section>
          <Footer isLogin={isLogin} />
        </div>
      </main>
    </>
  );
}
