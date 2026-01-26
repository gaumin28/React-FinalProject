import ArtistBanner from "./ArtistBanner";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TrendingSong from "./TrendingSong";

export default function FavouritePage() {
  return (
    <main className="flex-1 bg-linear-to-r from-[#0E1920] to-[#412c3a] rounded-lg p-4 md:p-6">
      {/* <Navbar /> */}

      <div className="max-w-5xl mx-auto">
        <ArtistBanner />

        <TrendingSong />

        <Footer />
      </div>
    </main>
  );
}
