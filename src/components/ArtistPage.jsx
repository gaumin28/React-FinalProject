import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ArtistBanner from "./ArtistBanner";
import Card from "./Card";
import Artist from "./Artist";
import Header from "./Header";
import Footer from "./Footer";
import PopularSongList from "./PopularSongList";
import popularArtists from "../data/popularArtist";
import { useMemo } from "react";
import { useLocation } from "react-router";
import CardAlbum from "./CardAlbum";

export default function ArtistPage({
  isLogin,
  currentPlayingId,
  setCurrentPlayingId,
  setIsSidebar,
  isSidebar,
  idThemeSelected,
  setIdThemeSelected,
}) {
  // Get the navigation location state
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const selectedId = location.state?.selectedId;

  // Find the selected artist index from either ID or search query
  // useMemo prevents recalculation unless selectedId or searchQuery changes
  const selectedArtistIndex = useMemo(() => {
    // If artist was selected by ID
    if (selectedId) {
      const index = popularArtists.findIndex(
        (artist) => artist.id === selectedId,
      );
      return index !== -1 ? index : 3;
    }
    // If artist was searched by name
    if (searchQuery) {
      const index = popularArtists.findIndex(
        (artist) => artist.name.toLowerCase() === searchQuery.toLowerCase(),
      );
      return index !== -1 ? index : 3;
    }
    return 3; // Default artist index
  }, [selectedId, searchQuery]);

  // Create a list of other artists
  const newData = popularArtists.toSpliced(selectedArtistIndex, 1);

  // Get data of the selected artist
  const artistSelected = popularArtists[selectedArtistIndex];

  return (
    <>
      {/* <Header isLogin={isLogin} setIsSidebar={setIsSidebar} /> */}

      <Sidebar
        isLogin={isLogin}
        isSidebar={isSidebar}
        idThemeSelected={idThemeSelected}
        setIdThemeSelected={setIdThemeSelected}
      />

      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} setIsSidebar={setIsSidebar} />

        <div className="max-w-5xl mx-auto">
          <ArtistBanner selectedArtistIndex={selectedArtistIndex} />

          <section className="mt-8">
            <h2 className="section-title text-white mb-4">Popular</h2>

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
          {/* album */}
          <section>
            <h2 className="section-title mt-5">
              Artist's <span className="text-pink-400">Albums</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {artistSelected.albums.map((album) => (
                <CardAlbum
                  key={album.id}
                  album={album}
                  id={album.id}
                  name={album.name}
                  artist={album.artist}
                  image={album.image}
                />
              ))}
            </div>
          </section>

          {/* single songs */}
          <section>
            <h2 className="section-title mt-5">
              Single <span className="text-pink-400">Songs</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {artistSelected.songs
                .filter((_, index) => index < 6)
                .map((song) => (
                  <Card
                    key={song.id}
                    isLogin={isLogin}
                    id={song.id}
                    name={song.name}
                    artist={song.artist}
                    image={song.image}
                  />
                ))}
            </div>
          </section>

          {/* Recommended Artists */}
          <section>
            <h2 className="section-title mt-5">
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
