import { Link, useLocation, useNavigate } from "react-router";
import mySongList from "../data/mySongList";
import { useRef, useState } from "react";
import Header from "./Header";

export default function Navbar({ isLogin, setIsLogIn, setIsSidebar }) {
  // Get username from localStorage for greeting
  const userName = localStorage.getItem("userName");

  // Reference to search input field
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [isNotFound, setIsNotFound] = useState(false);

  function filterArtistNamesByPart(songs, searchText) {
    const query = String(searchText || "")
      .toLowerCase()
      .trim();
    if (!query) return [];
    const matches = songs
      .map((song) => song?.artist)
      .filter(Boolean)
      .filter((artist) => artist.toLowerCase().includes(query));
    return Array.from(new Set(matches));
  }

  function filterSongNamesByPart(songs, searchText) {
    const query = String(searchText || "")
      .toLowerCase()
      .trim();
    if (!query) return [];
    const matches = songs
      .map((song) => song?.name)
      .filter(Boolean)
      .filter((name) => name.toLowerCase().includes(query));
    return Array.from(new Set(matches));
  }

  function handleSearch() {
    const searchValue = ref.current.value.toLowerCase().trim();
    if (!searchValue) return;

    // arrays of artist names and song names for searching

    const matchedArtists = filterArtistNamesByPart(
      mySongList,
      ref.current.value,
    );
    const matchedSongs = filterSongNamesByPart(mySongList, ref.current.value);

    const artistName = mySongList
      .map((item) => item.artist?.toLowerCase())
      .filter(Boolean);
    const songName = mySongList
      .map((item) => item.name?.toLowerCase())
      .filter(Boolean);

    // Navigate to artist page
    if (searchValue === "eminem" || artistName.includes(searchValue)) {
      navigate("/artist", { state: { searchQuery: searchValue } });
    }
    // Navigate to music player
    else if (songName.includes(searchValue)) {
      navigate("/play-music", {
        state: { searchQuery: searchValue, isLogin: isLogin },
      });
    } else if (matchedArtists.length || matchedSongs.length) {
      navigate("/song-search", {
        state: { searchQuery: searchValue, isLogin },
      });
    }
    // Show alert if no match found
    else {
      setIsNotFound(true);
      setTimeout(() => setIsNotFound(false), 2000);
    }

    // Clear search input after search
    ref.current.value = "";
  }

  return (
    <nav className="flex items-center justify-between gap-4 mb-6 sticky top-0 z-10 nav-blur">
      <Header setIsSidebar={setIsSidebar} />
      <div className="relative flex-1 md:ml-20">
        {/* <button
          onClick={handleSearch}
          className="absolute inset-y-0 left-4 flex items-center"
        >
          <svg
            className="w-4 opacity-80"
            alt="search icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button> */}

        <div className="search-pill flex items-center w-full max-w-xl">
          <input
            ref={ref}
            name="searchText"
            className="search-input outline-0 w-full pl-9 pr-3 py-1.5"
            type="text"
            placeholder="Search For Songs, Artists"
          />
          {isNotFound && (
            <span className="download-notice" role="status">
              Data not found
            </span>
          )}
          <button onClick={handleSearch} className="search-action">
            <svg
              className="w-4"
              alt="search icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </div>

      {isLogin ? (
        <>
          <span className="px-3 py-1 text-pink-400 font-bold">
            Hello, {userName}
          </span>
          <button
            onClick={() => {
              setIsLogIn(false);
              localStorage.removeItem("userName");
              localStorage.setItem("isLogin", "false");
            }}
            className="btn btn-primary"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <div className=" md:flex gap-4 md:mr-20">
            <Link
              to="/login"
              state={{ returnTo: location.pathname }}
              className="btn btn-ghost min-w-30 text-center"
            >
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary min-w-30 text-center">
              Sign Up
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
