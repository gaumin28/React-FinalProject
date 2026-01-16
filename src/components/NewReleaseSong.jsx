import Card from "./Card";
import newReleaseData from "../data/newReleaseSong";

export default function NewReleaseSong() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        New Release <span className="text-pink-400">Songs</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {newReleaseData.map((song) => (
          <Card
            key={song.id}
            name={song.name}
            artist={song.artist}
            image={song.image}
          />
        ))}
      </div>
    </section>
  );
}
