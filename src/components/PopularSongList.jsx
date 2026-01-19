import pinkHeart from "../image/pink-heart.svg";

export default function PopularSongList({
  id,
  name,
  artist,
  release,
  views,
  duration,
  image,
}) {
  return (
    <div className="space-y-3 mt-1">
      <div className="bg-[#1E1E1E] rounded-md p-3">
        <div className="flex flex-col md:grid md:grid-cols-12 md:items-center gap-3">
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="font-bold text-pink-400">{id}</span>
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="music-playing cursor-pointer w-12 h-12 rounded object-cover"
              />
              <svg
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
              </svg>
              {/* <img
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none hidden"
                src="./IMG/pause-icon.png"
                alt="pause icon"
              /> */}
            </div>
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs font-thin opacity-70">{artist}</p>
            </div>
          </div>
          <div className="md:col-span-3 text-gray-300">{release}</div>
          <div className="md:col-span-2 text-gray-300">{views}</div>
          <div className="md:col-span-2 text-right">
            <div className="flex items-center justify-end gap-2">
              {/* <svg
                className="fav-heart cursor-pointer w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z" />
              </svg> */}
              <img
                src={pinkHeart}
                alt="heart"
                className="fav-heart cursor-pointer w-5 h-5"
              />
              <span className="text-white">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
