import image2 from "../image/pink-play.png";

export default function Banner({
  songNames,
  songNumbers,
  totalDuration,
  title,
  image,
}) {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-400 opacity-80 rounded-md p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 mt-6">
        <div className="shrink-0">
          <img
            src={image}
            alt="trending music"
            className="w-40 md:w-64 object-cover rounded"
          />
        </div>

        <div className="flex-1 text-white">
          <h2 className="text-2xl font-bold">
            {title} <span className="text-pink-500">mix</span>
          </h2>
          <p className="text-sm font-thin">{songNames}</p>
          <div className="mt-3 font-bold">
            {songNumbers} songs <span className="text-pink-400">•</span>{" "}
            {totalDuration}
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <span className="text-pink-500 font-semibold">Play all</span>
          <button id="play-all-button" className="cursor-pointer" type="button">
            <img
              src={image2}
              alt="play button"
              id="play-all"
              className="size-8"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
