import { Link, useNavigate, useLocation } from "react-router";
import TheEminemShow from "../image/TheEminemShow.jpg";
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
    if (selectedIndex < mySongList.length) {
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
      className="bg-center bg-cover bg-no-repeat mx-auto text-neutral-950"
    >
      <div className="w-107.5 h-233 backdrop-blur-md">
        <nav>
          <div className="pt-20 px-5 mb-3">
            <div className="flex justify-between ">
              <span
                onClick={() => nav("/")}
                className="cursor-pointer text-2xl"
              >
                <span>🏠</span> Home
              </span>

              <span onClick={() => nav("/your-playlist")} className="text-xl">
                My Favourite Songs
              </span>
            </div>

            <h1 className="text-blue-500 text-center text-3xl font-bold">
              Music <span className="text-pink-500">Player</span>
            </h1>
          </div>
        </nav>

        <div className=" flex flex-col gap-15 mt-10 ">
          <div>
            <img
              className="size-87.5 mx-auto mb-4"
              src={selectedSong.image}
              alt="Eminem show"
            />

            <div className="h-8.75 w-87.5 bg-[#630a4a] rounded-lg flex items-center justify-around mx-auto px-1">
              <div className="flex gap-3 bg-[#ee10b0] h-7.25 w-43.75 justify-center items-center rounded-lg">
                <img src={mdi_music} alt="music icon" />
                <span className="text-white text-[14px] font-extrabold">
                  Song
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mx-auto">
            <div className="flex justify-between">
              <div className="flex flex-col gap-4 text-neutral-950">
                <h1 className="text-[32px] font-extrabold">
                  {selectedSong.name}
                </h1>
                <p className="text-[24px]">{selectedSong.artist}</p>
              </div>

              <img
                onClick={handleToggleFavorite}
                style={{
                  filter:
                    isFavorited && isLogin ? "opacity(1)" : "opacity(0.5)",
                }}
                className="cursor-pointer self-end"
                src={heart_light}
                alt="heart-icon"
              />
            </div>

            <img src={equalizer} />

            <div className="flex justify-evenly">
              <img
                onClick={() => setRepeatSong(!repeatSong)}
                className={`cursor-pointer size-12 self-center ${repeatSong ? "opacity-100" : "opacity-50"}`}
                src={repeat_icon}
                alt="repeat-icon"
              />

              <button
                onClick={handlePreviousSong}
                disabled={selectedIndex < 0}
                className="self-center"
              >
                <img
                  className={`size-12 ${selectedIndex >= mySongList.length - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  src={back_icon}
                  alt="back-icon"
                />
              </button>

              <button onClick={togglePlayPause}>
                {playing ? (
                  <img
                    className="cursor-pointer "
                    src={pink_pause}
                    alt="pause"
                  />
                ) : (
                  <img className="cursor-pointer" src={pink_play} alt="play" />
                )}
              </button>

              <button
                onClick={handleNextSong}
                className="self-center"
                disabled={selectedIndex >= mySongList.length - 1}
              >
                <img
                  className={`size-12 ${selectedIndex >= mySongList.length - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  src={next_icon}
                  alt="next-icon"
                />
              </button>

              <button onClick={() => downloadSong(audio, "mysong.mp3")}>
                <svg
                  className="size-9 text-pink-500"
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
