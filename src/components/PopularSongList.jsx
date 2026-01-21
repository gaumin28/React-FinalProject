import pinkHeart from "../image/pink-heart.svg";
import pauseIcon from "../image/pauseIcon.png";
import { useRef, useEffect, useState } from "react";
import { toggleFavorite, isFavorite } from "../utils/favoritesManager";
const audio = "/audio/audio.mp3";
export default function PopularSongList({
  index,
  id,
  name,
  artist,
  release,
  views,
  duration,
  image,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  const audioRef = useRef(new Audio(audio));
  const isPlaying = currentPlayingId === id;
  const [isFavorited, setIsFavorited] = useState(() => isFavorite(id));

  function handleToggleFavorite() {
    toggleFavorite(id);
    setIsFavorited(!isFavorited);
    // Dispatch custom event to notify MyPlaylistSong component
    window.dispatchEvent(new Event("favoritesChanged"));
  }

  useEffect(() => {
    const ref = audioRef.current;
    if (ref) {
      if (isPlaying) {
        ref.play();
      } else {
        ref.pause();
      }
    }
  }, [isPlaying]);
  const handleClick = () => {
    if (isPlaying) {
      setCurrentPlayingId(null); // Stop current song
    } else {
      setCurrentPlayingId(id); // Play this song
    }
  };
  return (
    <div className="space-y-3 mt-1">
      <div className="bg-[#1E1E1E] rounded-md p-3">
        <div className="flex flex-col md:grid md:grid-cols-12 md:items-center gap-3">
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="font-bold text-pink-400">#{index + 1}</span>
            <div onClick={handleClick} className="relative">
              <img
                src={image}
                alt={name}
                className="cursor-pointer w-12 h-12 rounded object-cover"
              />
              {isPlaying && (
                <img
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none"
                  src={pauseIcon}
                  alt="pause icon"
                />
              )}
            </div>
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs font-thin opacity-70">{artist}</p>
            </div>
          </div>
          <div className="md:col-span-3 text-gray-300">{release}</div>
          <div className="md:col-span-2 text-gray-300">{views}</div>
          <div className="md:col-span-2 text-right">
            <div className="flex items-center justify-end gap-2">
              <img
                onClick={handleToggleFavorite}
                style={{ filter: isFavorited ? "opacity(1)" : "opacity(0.5)" }}
                src={pinkHeart}
                alt="heart"
                className="fav-heart cursor-pointer w-5 h-5"
              />
              <span className="text-white">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
