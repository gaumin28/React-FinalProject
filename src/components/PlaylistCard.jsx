import image2 from "../image/playlist.png";

export default function PlaylistCard({ title, image }) {
  return (
    <div className="w-28 md:w-32 h-40 bg-[#1F1F1F] rounded">
      <a href="#">
        <img
          className="size-24 md:size-28 h-auto rounded mx-auto mt-2 mb-2"
          src={image}
          alt={title}
        />

        <div className="flex justify-between mt-1 mx-2">
          <p className="text-[12px] font-thin">{title}</p>
          <img src={image2} alt="playlist-icon" />
        </div>
      </a>
    </div>
  );
}
