import banner from "../image/Eminem-banner.png";

export default function ArtistBanner() {
  return (
    <section
      className="relative bg-cover bg-center rounded-md overflow-hidden h-56 md:h-96"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2 className="absolute left-4 bottom-4 text-2xl md:text-6xl font-bold">
        Eminem
      </h2>
    </section>
  );
}
