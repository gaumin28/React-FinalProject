import { Link, useNavigate } from "react-router";

export default function VideoCard({ name, artist, image, view, id, video }) {
  const nav = useNavigate();
  return (
    <div className="card-surface w-3/4 md:w-52 rounded-xl p-2">
      <div
        onClick={() => {
          nav("/mv-player", { state: { id, video } });
        }}
      >
        <img
          className="w-full h-44 rounded-lg object-cover"
          src={image}
          alt={name}
        />
        <h3 className="text-[15px] mt-2 font-semibold">{name}</h3>
        <div className="flex justify-between text-[11px] opacity-80">
          <p>{artist}</p>
          <p>{view}</p>
        </div>
      </div>
    </div>
  );
}
