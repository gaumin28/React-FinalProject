const featuredPodcasts = [
  {
    id: 1,
    title: "Late Night Beats",
    host: "Melody Studio",
    description: "Chill talks with lo-fi vibes and weekly guests.",
    duration: "42 min",
  },
  {
    id: 2,
    title: "Soundwave Stories",
    host: "Eclipse Media",
    description: "Behind-the-scenes of modern music creation.",
    duration: "58 min",
  },
  {
    id: 3,
    title: "Producer's Desk",
    host: "Aria Knox",
    description: "Tools, techniques, and inspirations for producers.",
    duration: "36 min",
  },
];

const trendingEpisodes = [
  {
    id: 101,
    title: "Episode 24: City Night Drive",
    show: "Late Night Beats",
    time: "28 min",
  },
  {
    id: 102,
    title: "Episode 12: Vocal Layers",
    show: "Producer's Desk",
    time: "33 min",
  },
  {
    id: 103,
    title: "Episode 08: Analog vs Digital",
    show: "Soundwave Stories",
    time: "41 min",
  },
  {
    id: 104,
    title: "Episode 19: Sample Magic",
    show: "Producer's Desk",
    time: "26 min",
  },
];

export default function Podcast() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <section className="card-surface p-6 rounded-3xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <h1 className="section-title">Podcasts</h1>
              <p className="text-gray-300">
                Fresh stories, creator insights, and deep dives into music
                culture.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="btn btn-primary">Start Listening</button>
              <button className="btn btn-ghost">Explore Genres</button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Featured shows</h2>
            <button className="btn btn-ghost">View all</button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredPodcasts.map((podcast) => (
              <article
                key={podcast.id}
                className="card-surface p-5 rounded-2xl"
              >
                <div className="space-y-3">
                  <div className="text-xs uppercase text-pink-300 tracking-widest">
                    {podcast.host}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-gray-300">{podcast.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{podcast.duration}</span>
                    <button className="btn btn-primary">Play</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Trending episodes</h2>
            <button className="btn btn-ghost">See charts</button>
          </div>
          <div className="space-y-3">
            {trendingEpisodes.map((episode) => (
              <div
                key={episode.id}
                className="list-row flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-semibold">{episode.title}</p>
                  <p className="text-sm text-gray-400">{episode.show}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{episode.time}</span>
                  <button className="btn btn-primary">Play</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
