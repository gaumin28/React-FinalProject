import image1 from "../image/ClassicTrack.png";
import image2 from "../image/RockTrack.png";
import image3 from "../image/RapTrack.png";
import image4 from "../image/PopTrack.png";
import { Link } from "react-router";

export default function MusicGenre() {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold">
        Music <span className="text-pink-400">Genres</span>
      </h2>
      <div className="flex flex-wrap gap-4 mt-6">
        <Link className="w-32 md:w-50" to="./PlaylistResponsive.html">
          <img className="w-full h-auto" src={image3} alt="Rap" />
        </Link>
        <Link className="w-32 md:w-50" to="./PlaylistResponsive.html">
          <img className="w-full h-auto" src={image4} alt="Pop" />
        </Link>
        <Link className="w-32 md:w-50" to="./PlaylistResponsive.html">
          <img className="w-full h-auto" src={image2} alt="Rock" />
        </Link>
        <Link className="w-32 md:w-50" to="./PlaylistResponsive.html">
          <img className="w-full h-auto" src={image1} alt="classic" />
        </Link>
      </div>
    </section>
  );
}
