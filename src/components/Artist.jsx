export default function Artist({ name, image }) {
  return (
    <div className="flex flex-col gap-6">
      <img className="rounded-full size-32.5" src={image} alt={name} />
      <a className="text-white self-center" href="#">
        {name}
      </a>
    </div>
  );
}
