import Banner from "./Banner";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TrendingSong from "./TrendingSong";
import SongList from "./SongList";
import Footer from "./Footer";
import TrendingMusic from "../image/TrendingMusic.png";

export default function AlbumPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <Banner
            image={TrendingMusic}
            title={"Trending music"}
            songNumbers={10}
          />
          <TrendingSong />
          <Footer />
        </div>
      </main>
    </>
  );
}
