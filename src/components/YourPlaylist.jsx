import Banner from "./Banner";
import Footer from "./Footer";
import my_playlist from "../image/my-playlist.jpg";
import MyPlaylistSong from "./MyPlaylistSong";
import { useNavigate } from "react-router";

export default function YourPlaylist({
  currentPlayingId,
  setCurrentPlayingId,
  setIsLogIn,
  isLogin,
}) {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      {isLogin ? (
        <main className="flex-1 p-4 md:p-6">
          {/* <Navbar /> */}

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between mr-2 mb-5">
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer text-2xl"
              >
                <span>🏠</span> Home
              </span>
              <div className="flex">
                <h1 className="px-3 py-1 text-pink-400 font-bold">
                  Hello, {userName}
                </h1>
                <button
                  onClick={() => {
                    setIsLogIn(false);
                    navigate("/");
                  }}
                  className="logoutBtn"
                >
                  Logout
                </button>
              </div>
            </div>

            <Banner image={my_playlist} title={"My Playlist"} />
            <MyPlaylistSong
              currentPlayingId={currentPlayingId}
              setCurrentPlayingId={setCurrentPlayingId}
            />
            <Footer />
          </div>
        </main>
      ) : (
        <div className="mx-auto flex flex-col items-center gap-3">
          <p className="font-bold text-xl">Please login to continue</p>
          <button onClick={() => navigate("/login")} className="btn btn-ghost">
            Log In
          </button>
        </div>
      )}
    </>
  );
}
