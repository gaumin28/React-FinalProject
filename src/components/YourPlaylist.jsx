import Banner from "./Banner";
import Footer from "./Footer";
import my_playlist from "../image/my-playlist.jpg";
import MyPlaylistSong from "./MyPlaylistSong";

export default function YourPlaylist({
  currentPlayingId,
  setCurrentPlayingId,
}) {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <main className="flex-1 p-4 md:p-6">
        {/* <Navbar /> */}
        <h1 className="text-center">Hello</h1>
        <div className="max-w-5xl mx-auto">
          <Banner image={my_playlist} title={"My Playlist"} />
          <MyPlaylistSong
            currentPlayingId={currentPlayingId}
            setCurrentPlayingId={setCurrentPlayingId}
          />
          <Footer />
        </div>
      </main>
    </>
  );
}
