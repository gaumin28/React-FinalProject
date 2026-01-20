import { Link } from "react-router";

export default function Artist({ name, image, onSelect }) {
  return (
    <div onClick={onSelect} className="flex flex-col gap-6">
      <img className="rounded-full size-32.5" src={image} alt={name} />
      <Link className="text-white self-center" to="#">
        {name}
      </Link>
    </div>
  );
}
