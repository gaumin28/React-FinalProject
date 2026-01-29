import popularArtists from "../data/popularArtist";

export default function ArtistBanner({ selectedArtistIndex }) {
  const selectedArtist = popularArtists[selectedArtistIndex];

  return (
    <section
      className="relative bg-cover rounded-md overflow-hidden h-56 md:h-96"
      style={{ backgroundImage: `url(${selectedArtist.imgBanner})` }}
    >
      <h2 className="absolute left-4 bottom-4 text-2xl md:text-6xl font-bold">
        {selectedArtist.name}
      </h2>
    </section>
  );
}
