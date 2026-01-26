import { Link, useNavigate } from "react-router";

export default function VideoCard({ name, artist, image, view, id, video }) {
  const nav = useNavigate();
  return (
    <div className="w-3/4 md:w-48 bg-[#1f1f1f]">
      <div
        onClick={() => {
          nav("/mv-player", { state: { id, video } });
        }}
      >
        <img className="size-48 rounded" src={image} alt={name} />
        <h3 className="text-[16px] ml-1">{name}</h3>
        <div className="flex justify-between mx-1">
          <p className="text-[10px]">{artist}</p>
          <p className="text-[10px]">{view}</p>
        </div>
      </div>
    </div>
  );
}
