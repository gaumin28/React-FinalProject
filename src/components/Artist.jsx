import { useNavigate } from "react-router";

export default function Artist({ name, image, id, songIds }) {
  const nav = useNavigate();
  function handleSelect() {
    nav("/artist", { state: { selectedId: id, songIds } });
  }
  return (
    <div onClick={handleSelect} className="flex flex-col gap-6 cursor-pointer">
      <img className="rounded-full size-32.5" src={image} alt={name} />
      <p className="text-white self-center">{name}</p>
    </div>
  );
}
