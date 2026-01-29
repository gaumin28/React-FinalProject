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

export default function DiscoverPage({
  isLogin,
  isSidebar,
  setIsSidebar,
  idThemeSelected,
  setIdThemeSelected,
}) {
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

        <div className="max-w-5xl mx-auto mt-10 space-y-10">
          <MusicGenre isLogin={isLogin} />

          <NewReleaseSong isLogin={isLogin} />

          <PopularArtist />

          <MusicVideo />

          <MoodPlaylist />

          <NewAlbum />

          <Footer isLogin={isLogin} />
        </div>
      </main>
    </>
  );
}
