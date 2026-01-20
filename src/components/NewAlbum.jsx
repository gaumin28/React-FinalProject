import newAlbum from "../data/newAlbum";
import Card from "./Card";

export default function NewAlbum() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        New <span className="text-pink-400">Albums</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {newAlbum.map((album) => (
          <Card
            key={album.id}
            name={album.name}
            artist={album.artist}
            image={album.image}
          />
        ))}
      </div>
    </section>
  );
}
