import { Link } from "react-router";
import TheEminemShow from "../image/TheEminemShow.jpg";
import heart_light from "../image/ph_heart-light.png";
import back_icon from "../image/back-icon.png";
import equalizer from "../image/equalizer.png";
import next_icon from "../image/next-icon.png";
import pink_play from "../image/pink-play.png";
import pause_icon from "../image/pause-icon.png";
import repeat_icon from "../image/repeat-icon.png";
import mdi_music from "../image/mdi_music.png";
import audio from "../audio/audio.mp3";
import { useEffect, useRef, useState } from "react";

export default function MusicPage() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(audio));

  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    const ref = audioRef.current;

    const handleEnded = () => setPlaying(false);
    ref.addEventListener("ended", handleEnded);

    return () => {
      // Stop audio when component unmounts
      ref.pause();
      ref.currentTime = 0;
      setPlaying(false);
      ref.removeEventListener("ended", handleEnded);
    };
  }, []);

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
      style={{ backgroundImage: `url(${TheEminemShow})` }}
      className="bg-center bg-cover bg-no-repeat mx-auto"
    >
      <div className="w-107.5 h-233 backdrop-blur-md">
        <nav>
          <div className="pt-20 px-5 mb-3">
            <h1 className="text-blue-500 text-center text-3xl font-bold">
              Alb<span className="text-pink-500">um</span>
            </h1>
          </div>
        </nav>
        <div className=" flex flex-col gap-15 mt-10">
          <div>
            <img
              className="size-87.5 mx-auto mb-4"
              src={TheEminemShow}
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
              <div className="flex flex-col gap-4 text-white">
                <h1 className="text-[32px] font-extrabold">White America</h1>
                <p className="text-[24px]">Eminem</p>
              </div>
              <img
                id="heart-icon"
                className="cursor-pointer self-end"
                src={heart_light}
                alt="heart-icon"
              />
            </div>
            <img src={equalizer} />
            <div className="flex justify-evenly">
              <img
                id="repeat-icon"
                className="cursor-pointer size-12 self-center"
                src={repeat_icon}
                alt="repeat-icon"
              />
              <Link className="self-center" to="./Music-Eminem.html">
                <img
                  className="cursor-pointer size-12"
                  src={back_icon}
                  alt="back-icon"
                />
              </Link>
              <button onClick={togglePlayPause}>
                {playing ? (
                  <img
                    className="cursor-pointer size-8"
                    src={pause_icon}
                    alt="pause"
                  />
                ) : (
                  <img className="cursor-pointer" src={pink_play} alt="play" />
                )}
              </button>

              <Link className="self-center" to="./Music-Eminem.html">
                <img
                  className="cursor-pointer size-12"
                  src={next_icon}
                  alt="next-icon"
                />
              </Link>
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
