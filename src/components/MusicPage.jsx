import { useNavigate, useLocation } from "react-router";
import heart_light from "../image/ph_heart-light.png";
import back_icon from "../image/back-icon.png";
import equalizer from "../image/equalizer.png";
import next_icon from "../image/next-icon.png";
import pink_play from "../image/pink-play.png";
import pink_pause from "../image/pink-pause.png";
import repeat_icon from "../image/repeat-icon.png";
import mdi_music from "../image/mdi_music.png";
import { toggleFavorite, isFavorite } from "../utils/favoritesManager";

import mySongList from "../data/mySongList";
import { useEffect, useRef, useState } from "react";

const audio = "/audio/audio.mp3";

export default function MusicPage() {
  // Playback state
  const [playing, setPlaying] = useState(false);
  const [repeatSong, setRepeatSong] = useState(false);
  const audioRef = useRef(new Audio(audio));

  // Get navigation state
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const selectedId = location.state?.selectedId;
  const isLogin = location.state?.isLogin;

  const nav = useNavigate();

  const getInitialIndex = () => {
    // If navigated with a selected song ID
    if (selectedId) {
      const index = mySongList.findIndex((name) => name.id === selectedId);
      return index !== -1 ? index : 0;
    }
    // If searched by song name
    if (searchQuery) {
      const index = mySongList.findIndex(
        (name) => name.name.toLowerCase() === searchQuery.toLowerCase(),
      );
      return index !== -1 ? index : 0;
    }
    // Default to first song
    return 0;
  };

  // Currently selected song index and data
  const [selectedIndex, setSelectedIndex] = useState(getInitialIndex());
  const selectedSong = mySongList[selectedIndex];

  // Track favorite status
  const [isFavorited, setIsFavorited] = useState(() =>
    isFavorite(selectedSong?.id),
  );

  /**
   * Toggle favorite status for the current song
   * Updates localStorage
   */
  function handleToggleFavorite() {
    if (selectedSong?.id) {
      toggleFavorite(selectedSong.id);
      setIsFavorited(!isFavorited);
      window.dispatchEvent(new Event("favoritesChanged"));
    }
  }

  /**
   * Toggle play/pause state
   */
  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  function handleNextSong() {
    if (selectedIndex < mySongList.length - 1) {
      setSelectedIndex((prev) => prev + 1);
      audioRef.current.pause();
      setPlaying(false);
      audioRef.current.currentTime = 0;
    }
  }

  function handlePreviousSong() {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
      audioRef.current.pause();
      setPlaying(false);
      audioRef.current.currentTime = 0;
    }
  }

  // Play or pause audio based on playing state
  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  // Handle song ending and repeat functionality
  useEffect(() => {
    const ref = audioRef.current;

    const handleEnded = () => {
      if (repeatSong) {
        ref.currentTime = 0;
        ref.play();
      } else {
        setPlaying(false);
      }
    };
    ref.addEventListener("ended", handleEnded);

    // Cleanup: Stop audio when component unmounts
    return () => {
      ref.pause();
      ref.currentTime = 0;
      setPlaying(false);
      ref.removeEventListener("ended", handleEnded);
    };
  }, [repeatSong]);

  //  download
  function downloadSong(audioUrl, fileName) {
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = fileName || "song.mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      style={{ backgroundImage: `url(${selectedSong.image})` }}
      className="bg-center bg-cover bg-no-repeat mx-auto text-white music-shell"
    >
      <div className="music-overlay max-w-5xl mx-auto p-6 md:p-10">
        <nav className="flex items-center justify-between text-sm md:text-base">
          <button onClick={() => nav("/")} className="btn btn-ghost">
            <span>🏠</span> Home
          </button>
          <button
            onClick={() => nav("/your-playlist")}
            className="btn btn-ghost"
          >
            My Favourite Songs
          </button>
        </nav>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
          <div className="flex flex-col items-center gap-4">
            <img
              className="music-cover w-full max-w-sm"
              src={selectedSong.image}
              alt={selectedSong.name}
            />
            <div className="music-chip">
              <img src={mdi_music} alt="music icon" className="size-4" />
              <span className="text-xs font-semibold">Song</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="music-title">{selectedSong.name}</h1>
                <p className="music-artist">{selectedSong.artist}</p>
              </div>
              <button
                onClick={handleToggleFavorite}
                className="control-btn"
                aria-label="Toggle favorite"
              >
                <img
                  style={{
                    filter:
                      isFavorited && isLogin ? "opacity(1)" : "opacity(0.5)",
                  }}
                  className="size-6"
                  src={heart_light}
                  alt="heart-icon"
                />
              </button>
            </div>

            <img src={equalizer} alt="equalizer" className="opacity-80" />

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setRepeatSong(!repeatSong)}
                className={`control-btn ${repeatSong ? "primary" : ""}`}
                aria-label="Repeat"
              >
                <img className="size-6" src={repeat_icon} alt="repeat-icon" />
              </button>

              <button
                onClick={handlePreviousSong}
                disabled={selectedIndex === 0}
                className="control-btn"
                aria-label="Previous"
              >
                <img
                  className={`size-6 ${selectedIndex === 0 ? "opacity-50" : ""}`}
                  src={back_icon}
                  alt="back-icon"
                />
              </button>

              <button
                onClick={togglePlayPause}
                className="control-btn primary"
                aria-label="Play or pause"
              >
                {playing ? (
                  <img className="size-6" src={pink_pause} alt="pause" />
                ) : (
                  <img className="size-6" src={pink_play} alt="play" />
                )}
              </button>

              <button
                onClick={handleNextSong}
                disabled={selectedIndex >= mySongList.length - 1}
                className="control-btn"
                aria-label="Next"
              >
                <img
                  className={`size-6 ${selectedIndex >= mySongList.length - 1 ? "opacity-50" : ""}`}
                  src={next_icon}
                  alt="next-icon"
                />
              </button>

              <button
                onClick={() => downloadSong(audio, "mysong.mp3")}
                className="control-btn"
                aria-label="Download"
              >
                <svg
                  className="size-5 text-pink-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
