import { useNavigate } from "react-router";
import genreSongs from "../data/genreSongs";

export default function MusicGenre() {
  const navigate = useNavigate();

  function handleClick(genre) {
    navigate("/genre-player", { state: { id: genre.id } });
  }

  return (
    <section className="px-4">
      <h2 className="section-title">
        Music <span className="text-pink-400">Genres</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {genreSongs.map((genre) => (
          <div
            onClick={() => handleClick(genre)}
            key={genre.id}
            className="card-surface w-32 md:w-50 cursor-pointer rounded-lg p-2"
          >
            <img
              className="w-full h-auto rounded-lg"
              src={genre.image}
              alt={genre.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
