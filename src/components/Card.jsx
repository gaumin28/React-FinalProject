import image2 from "../image/pink-music.svg";
export default function Card({ name, artist, image }) {
  return (
    <div className="w-28 md:w-32 h-42 bg-[#1F1F1F] rounded">
      <a href="#">
        <img
          className="size-24 md:size-28 h-auto rounded mx-auto mt-2 mb-2"
          src={image}
          alt={name}
        />
        <div className="mx-3">
          <h3 className="text-[10px]">{name}</h3>
          <div className="flex justify-between mt-1">
            <p className="text-[8px] font-thin">{artist}</p>
            <img src={image2} alt="music-icon" />
          </div>
        </div>
      </a>
    </div>
  );
}
