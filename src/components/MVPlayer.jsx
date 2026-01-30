import Header from "./Header";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TrendingSong from "./TrendingSong";
import Footer from "./Footer";
import musicVideo from "../data/musicVideo";
import VideoCard from "./VideoCard";
import { useLocation } from "react-router";

export default function MVPlayer({
  isLogin,
  setIsLogIn,
  idThemeSelected,
  setIdThemeSelected,
}) {
  const location = useLocation();
  const selectedId = location.state?.id;
  const indexSelected = musicVideo.findIndex((song) => song.id === selectedId);
  const selectedVideo = musicVideo[indexSelected] || musicVideo[0];
  return (
    <>
      <Header isLogin={isLogin} />

      <Sidebar
        isLogin={isLogin}
        idThemeSelected={idThemeSelected}
        setIdThemeSelected={setIdThemeSelected}
      />

      <main className="flex-1 p-4 md:p-6">
        <Navbar isLogin={isLogin} setIsLogIn={setIsLogIn} />

        <div className="max-w-5xl mx-auto">
          {/* Video Player Section */}
          <section className="mb-8">
            <div className="mv-hero space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="section-title text-white">
                    {selectedVideo.title}{" "}
                    <span className="text-pink-400">Video</span>
                  </h1>
                  <div className="mv-meta mt-2">
                    <span>{selectedVideo.artist}</span>
                    <span>•</span>
                    <span>{selectedVideo.views} views</span>
                  </div>
                </div>
              </div>

              <div className="mv-frame">
                {isLogin ? (
                  <video
                    key={selectedVideo.id}
                    src={selectedVideo.video}
                    controls
                    autoPlay
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="py-12 text-center text-gray-300">
                    Please login to view this content
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="px-2">
            <h2 className="section-title">
              More <span className="text-pink-400">Videos</span>
            </h2>
            <div className="flex flex-col items-center flex-wrap gap-4 mt-6 md:flex-row">
              {musicVideo
                .filter((song) => song.id !== selectedVideo.id)
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
