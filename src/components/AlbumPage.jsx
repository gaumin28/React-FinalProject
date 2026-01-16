import Banner from "./Banner";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TrendingSong from "./TrendingSong";
import SongList from "./SongList";
import Footer from "./Footer";

export default function AlbumPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <Banner />
          <TrendingSong />
          <Footer />
        </div>
      </main>
    </>
  );
}
