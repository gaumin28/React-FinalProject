import image1 from "../image/SoftCore.png";
import image2 from "../image/pink-heart.svg";

export default function SongList() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-black rounded-md p-3">
      <div className="flex items-center gap-2 md:w-1/2 pl-0">
        <span className="self-center">#1</span>
        <div className="relative">
          <img
            className="music-playing w-12 h-12 rounded object-cover cursor-pointer"
            src={image1}
            alt="Softcore"
          />
          <img
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none hidden"
            src="./IMG/pause-icon.png"
            alt="pause icon"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Softcore</h3>
          <p className="text-xs font-thin opacity-70">The neighberhood</p>
        </div>
      </div>
      <div className="mt-2 md:mt-0 md:w-1/6 pl-0">
        <span className="text-gray-300">Nov 4, 2023</span>
      </div>
      <div className="mt-2 md:mt-0 md:w-1/3">
        <span className="text-gray-300 block pr-0 md:pr-10">
          Hard to Imagine the Neighbourhood Ever Changing
        </span>
      </div>
      <div className="mt-2 md:mt-0 md:w-auto">
        <div className="flex gap-2 px-0 md:px-5 items-center">
          <img
            src={image2}
            alt="heart"
            className="fav-heart cursor-pointer w-5 h-5"
          />
          <span className="text-white">3:26</span>
        </div>
      </div>
    </div>
  );
}
