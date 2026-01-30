import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TrendingSong from "./TrendingSong";
import Footer from "./Footer";
import musicVideo from "../data/musicVideo";
import VideoCard from "./VideoCard";
import { useLocation } from "react-router";

export default function MVPlayer({ isLogin, setIsLogIn }) {
  const location = useLocation();
  const selectedId = location.state?.id;
  const indexSelected = musicVideo.findIndex((song) => song.id === selectedId);
  return (
    <>
      <Header isLogin={isLogin} />

      <Sidebar isLogin={isLogin} />

      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} setIsLogIn={setIsLogIn} />

        <div className="max-w-5xl mx-auto">
          {/* Video Player Section */}
          <section className="mb-8">
            <div className="card-surface rounded-xl p-4 space-y-4">
              <h1 className="section-title text-white">
                Music <span className="text-pink-400">Video</span>
              </h1>

              <div className=" rounded-xl overflow-hidden shadow-md">
                {isLogin ? (
                  <video
                    key={musicVideo[indexSelected].id}
                    src={musicVideo[indexSelected].video}
                    controls
                    autoPlay
                    className="w-full h-auto bg-black"
                  />
                ) : (
                  <p className="text-gray-300 text-center">
                    Please login to view this content
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="px-4">
            <h2 className="section-title">
              Music <span className="text-pink-400">Video</span>
            </h2>
            <div className="flex flex-col items-center flex-wrap gap-4 mt-6 md:flex-row">
              {musicVideo
                .filter((song) => song.id !== selectedId)
                .map((song) => (
                  <VideoCard
                    key={song.id}
                    id={song.id}
                    name={song.title}
                    artist={song.artist}
                    image={song.image}
                    view={song.views}
                    video={song.video}
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
