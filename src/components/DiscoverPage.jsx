import Header from "./Header";
import MoodPlaylist from "./MoodPlaylist";
import MusicGenre from "./MusicGenre";
import MusicVideo from "./MusicVideo";
import Navbar from "./Navbar";
import NewReleaseSong from "./NewReleaseSong";
import PopularArtist from "./PopularArtist";
import Sidebar from "./Sidebar";
import NewAlbum from "./NewAlbum";
import Footer from "./Footer";

export default function DiscoverPage({ isLogin }) {
  return (
    <>
      <Header isLogin={isLogin} />
      <Sidebar isLogin={isLogin} />
      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} />
        {/* content section */}
        <div className="max-w-5xl mx-auto mt-10 space-y-10">
          <MusicGenre />
          <NewReleaseSong />
          <PopularArtist />
          <MusicVideo />
          <MoodPlaylist />
          <NewAlbum />
          <Footer />
        </div>
      </main>
    </>
  );
}
