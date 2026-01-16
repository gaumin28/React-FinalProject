import Card from "./Card";
import weekylyData from "../data/weeklyData";

export default function WeeklyTopSong() {
  return (
    <section>
      <h2 className="text-2xl font-bold">
        Weekly Top <span className="text-pink-400">Songs</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {weekylyData.map((song) => (
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
