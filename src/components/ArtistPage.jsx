import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ArtistBanner from "./ArtistBanner";
import Card from "./Card";
import Artist from "./Artist";
import Footer from "./Footer";
import PopularSongList from "./PopularSongList";
import eminemSongs from "../data/eminemSongs";
import eminemAlbum from "../data/eminemAlbum";
import popularArtists from "../data/popularArtist";

export default function ArtistPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <ArtistBanner />
          <section className="mt-8">
            <h2 className="text-2xl text-white font-bold mb-4">Popular</h2>

            <div className="hidden md:grid md:grid-cols-12 gap-4 text-white mb-2">
              <div className="md:col-span-5">Song</div>
              <div className="md:col-span-3">Release Date</div>
              <div className="md:col-span-2">Played</div>
              <div className="md:col-span-2 text-right pr-4">Time</div>
            </div>
          </section>

          {eminemSongs.map((song) => (
            <PopularSongList
              key={song.id}
              id={song.id}
              artist={song.artist}
              release={song.releaseDate}
              views={song.views}
              duration={song.duration}
              image={song.image}
            />
          ))}
          <section>
            <h2 className="text-2xl font-bold mt-5">
              Artist's <span className="text-pink-400">Albums</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {eminemAlbum.map((album) => (
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
              {eminemSongs
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
              {popularArtists.map((artist) => (
                <Artist
                  key={artist.id}
                  image={artist.image}
                  name={artist.name}
                />
              ))}
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
