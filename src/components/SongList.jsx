// Import icons and utilities for song display and favorites
import image2 from "../image/pink-heart.svg";
import pauseIcon from "../image/pauseIcon.png";
import { useRef, useEffect, useState } from "react";
import { toggleFavorite, isFavorite } from "../utils/favoritesManager";

// Audio file for playback
const audio = "/audio/audio.mp3";

export default function SongList({
  id,
  index,
  name,
  duration,
  artist,
  image,
  released,
  album,
  isLogin,
  currentPlayingId,
  setCurrentPlayingId,
}) {
  // Audio reference for playback control
  const audioRef = useRef(new Audio(audio));

  // Check if this song is currently playing
  const isPlaying = currentPlayingId === id;

  // Track favorite status for this song
  const [isFavorited, setIsFavorited] = useState(() => isFavorite(id));

  /**
   * Toggle favorite status for this song
   * Updates local state and localStorage, then notifies other components
   */
  function handleToggleFavorite() {
    toggleFavorite(id);
    setIsFavorited(!isFavorited);
    // Dispatch custom event to notify MyPlaylistSong component of changes
    window.dispatchEvent(new Event("favoritesChanged"));
  }

  // Play/pause audio when this song's playing status changes
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

  // Cleanup: Stop audio when component unmounts (e.g., route change)
  useEffect(() => {
    const ref = audioRef.current;
    return () => {
      if (ref) {
        ref.pause();
        ref.currentTime = 0;
      }
    };
  }, []);

  /**
   * Handle play/pause toggle when song is clicked
   */
  const handleClick = () => {
    if (isPlaying) {
      setCurrentPlayingId(null); // Stop current song
    } else {
      setCurrentPlayingId(id); // Play this song
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-black rounded-md p-3">
      {/* Song info section - image, number, name, artist */}
      <div className="flex items-center gap-2 md:w-1/2 pl-0">
        {/* Song number in list */}
        <span className="self-center">#{index + 1}</span>

        {/* Song image with play/pause overlay */}
        <div onClick={handleClick} className="relative cursor-pointer">
          <img
            className="w-12 h-12 rounded object-cover"
            src={image}
            alt={name}
          />
          {/* Show pause icon overlay when playing */}
          {isPlaying && (
            <img
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none"
              src={pauseIcon}
              alt="pause icon"
            />
          )}
        </div>

        {/* Song name and artist */}
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <p className="text-xs font-thin opacity-70">{artist}</p>
        </div>
      </div>

      {/* Release date */}
      <div className="mt-2 md:mt-0 md:w-1/6 pl-0">
        <span className="text-gray-300">{released}</span>
      </div>

      {/* Album name */}
      <div className="mt-2 md:mt-0 md:w-1/3">
        <span className="text-gray-300 block pr-0 md:pr-10">{album}</span>
      </div>

      {/* Favorite heart icon and duration */}
      <div className="mt-2 md:mt-0 md:w-auto">
        <div className="flex gap-2 px-0 md:px-5 items-center">
          {/* Favorite heart - full opacity if favorited and logged in */}
          <img
            onClick={handleToggleFavorite}
            style={{
              filter: isFavorited && isLogin ? "opacity(1)" : "opacity(0.5)",
            }}
            src={image2}
            alt="heart"
            className="cursor-pointer w-5 h-5"
          />
          {/* Song duration */}
          <span className="text-white">{duration}</span>
        </div>
      </div>
    </div>
  );
}
