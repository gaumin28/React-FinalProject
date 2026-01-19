import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TrendingSong from "./TrendingSong";

export default function RecentlyAdded() {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
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
