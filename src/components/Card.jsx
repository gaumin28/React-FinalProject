import { useNavigate } from "react-router";
import image2 from "../image/pink-music.svg";

export default function Card({ name, artist, image, id, isLogin }) {
  const nav = useNavigate();

  // Navigate to music player page with song id and login status
  function handleSelect() {
    nav("/play-music", { state: { selectedId: id, isLogin: isLogin } });
  }

  return (
    <div
      onClick={handleSelect}
      className="card-surface w-28 md:w-32 h-42 rounded cursor-pointer"
    >
      {/* Album/Song cover image */}
      <img
        className="size-24 md:size-28 h-auto rounded mx-auto mt-2 mb-2"
        src={image}
        alt={name}
      />

      {/* Song/Album details */}
      <div className="mx-3">
        <h3 className="text-[10px]">{name}</h3>
        <div className="flex justify-between mt-1">
          <p className="text-[8px] font-thin">{artist}</p>
          <img src={image2} alt="music-icon" />
        </div>
      </div>
    </div>
  );
}
