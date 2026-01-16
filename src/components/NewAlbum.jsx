import Card from "./Card";

export default function NewAlbum() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        New Release <span className="text-pink-400">Songs</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        <Card />
      </div>
    </section>
  );
}
