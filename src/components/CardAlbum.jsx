import { useNavigate } from "react-router";
import image2 from "../image/pink-music.svg";
export default function CardAlbum({ name, artist, image, id, album }) {
  const nav = useNavigate();
  function handleSelect() {
    nav("/artist-album", {
      state: {
        albumId: id,
        album: album, // Pass the entire album object
      },
    });
  }
  return (
    <div
      onClick={handleSelect}
      className="w-28 md:w-32 h-42 bg-[#1F1F1F] rounded cursor-pointer"
    >
      <img
        className="size-24 md:size-28 h-auto rounded mx-auto mt-2 mb-2"
        src={image}
        alt={name}
      />
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
