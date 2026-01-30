import Card from "./Card";
import newReleaseData from "../data/newReleaseSong";

export default function NewReleaseSong({ isLogin }) {
  return (
    <section>
      <h2 className="section-title">
        New Release <span className="text-pink-400">Songs</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {newReleaseData.map((song) => (
          <Card
            key={song.id}
            isLogin={isLogin}
            id={song.id}
            name={song.name}
            artist={song.artist}
            image={song.image}
          />
        ))}
      </div>
    </section>
  );
}
