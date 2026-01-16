import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ArtistBanner from "./ArtistBanner";
import pinkHeart from "../image/pink-heart.svg";
import theNeighbour from "../image/TheNeighbourhood.png";
import Card from "./Card";
import Artist from "./Artist";
import Footer from "./Footer";

function PopularSongList() {
  return (
    <div className="space-y-3">
      <div className="bg-[#1E1E1E] rounded-md p-3">
        <div className="flex flex-col md:grid md:grid-cols-12 md:items-center gap-3">
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="font-bold text-pink-400">1</span>
            <div className="relative">
              <img
                src={theNeighbour}
                alt="Without Me"
                className="music-playing cursor-pointer w-12 h-12 rounded object-cover"
              />
              <svg
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
              </svg>
              {/* <img
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none hidden"
                src="./IMG/pause-icon.png"
                alt="pause icon"
              /> */}
            </div>
            <div>
              <h3 className="font-bold">Without Me</h3>
              <p className="text-xs font-thin opacity-70">Eminem</p>
            </div>
          </div>
          <div className="md:col-span-3 text-gray-300">May 15, 2002</div>
          <div className="md:col-span-2 text-gray-300">21,215,618</div>
          <div className="md:col-span-2 text-right">
            <div className="flex items-center justify-end gap-2">
              {/* <svg
                className="fav-heart cursor-pointer w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
              </svg> */}
              <img
                src={pinkHeart}
                alt="heart"
                className="fav-heart cursor-pointer w-5 h-5"
              />
              <span className="text-white">4:50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <PopularSongList />
          <section>
            <h2 className="text-2xl font-bold">
              Artis's <span className="text-pink-400">Albums</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <Card />
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold">
              Single <span className="text-pink-400">Songs</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <Card />
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold">
              Recommended <span className="text-pink-400">Artists</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <Artist />
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
