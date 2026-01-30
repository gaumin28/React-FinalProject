import { useNavigate } from "react-router";

export default function Artist({ name, image, id }) {
  const nav = useNavigate();
  function handleSelect() {
    nav("/artist", { state: { selectedId: id } });
  }
  return (
    <div
      onClick={handleSelect}
      className="artist-card flex flex-col gap-4 cursor-pointer"
    >
      <img
        className="rounded-full size-32.5 ring-2 ring-pink-400/50 shadow-lg"
        src={image}
        alt={name}
      />
      <p className="text-white self-center">{name}</p>
    </div>
  );
}
