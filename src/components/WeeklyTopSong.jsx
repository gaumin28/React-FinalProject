import Card from "./Card";
import weekylyData from "../data/weeklyData";

export default function WeeklyTopSong({ isLogin }) {
  return (
    <section>
      <h2 className="section-title">
        Weekly Top <span className="text-pink-400">Songs</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {weekylyData.map((song) => (
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
