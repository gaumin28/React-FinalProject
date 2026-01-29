import { useNavigate } from "react-router";
import genreSongs from "../data/genreSongs";

export default function MusicGenre() {
  const navigate = useNavigate();

  function handleClick(genre) {
    navigate("/genre-player", { state: { id: genre.id } });
  }

  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold">
        Music <span className="text-pink-400">Genres</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {genreSongs.map((genre) => (
          <div
            onClick={() => handleClick(genre)}
            key={genre.id}
            className="w-32 md:w-50 cursor-pointer"
          >
            <img className="w-full h-auto" src={genre.image} alt={genre.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
