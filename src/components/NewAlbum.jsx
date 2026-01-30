import newAlbum from "../data/newAlbum";

import CardAlbum from "./CardAlbum";

export default function NewAlbum() {
  return (
    <section>
      <h2 className="section-title">
        New <span className="text-pink-400">Albums</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {newAlbum.map((album) => (
          <CardAlbum
            key={album.id}
            album={album}
            id={album.id}
            name={album.name}
            artist={album.artist}
            image={album.image}
          />
        ))}
      </div>
    </section>
  );
}
