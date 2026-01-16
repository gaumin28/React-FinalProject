export default function Sidebar({ isLogin }) {
  return (
    <aside
      id="sidebar"
      className="side-bar bg-[#0E1920] text-white w-full md:w-64 p-6 hidden md:flex md:flex-col md:space-y-6 md:sticky md:top-0 md:h-screen md:overflow-y-auto shrink-0"
    >
      <div className="md:block hidden">
        <h1 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
          Melodies
        </h1>
      </div>
      {/* menu */}
      <div>
        <h2 className="text-sm text-pink-400 mb-2">Menu</h2>
        <ul className="space-y-2">
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <a href="#">
              <span>🏠</span> Home
            </a>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <a href="./DiscoverResponsive.html">
              <span>🔍</span>
              Discover
            </a>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <a href="./AlbumsResponsive.html">
              <span>📀</span>
              Albums
            </a>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <a href="./ArtistResponsive.html">
              <span>🎤</span>
              Artists
            </a>
          </li>
        </ul>
      </div>
      {/* Library */}
      <div>
        <h2 className="text-sm text-pink-400 mb-2">Library</h2>
        <ul className="space-y-2">
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <a href="./RecentlyResponsive.html">
              <span>🕒</span> Recently Added
            </a>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <a href="./MostPlayedResponsive.html">
              <span>🔥</span> Most played
            </a>
          </li>
        </ul>
      </div>
      {/* Playlist and favourite */}
      {isLogin && (
        <div>
          <h2 className="text-sm text-pink-400 mb-2">Playlist and favorite</h2>
          <ul className="space-y-2">
            <li className="hover:bg-pink-500 rounded-[10px] pl-2">
              <a href="./FavouriteResponsive.html">
                <span>❤️</span> Your favorites
              </a>
            </li>
            <li className="hover:bg-pink-500 rounded-[10px] pl-2">
              <a href="./PlaylistResponsive.html">
                <span>📃</span> Your playlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}
