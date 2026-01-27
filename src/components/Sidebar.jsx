import { Link } from "react-router";

export default function Sidebar({ isLogin, isSidebar }) {
  return (
    <aside
      id="sidebar"
      className={` ${isSidebar ? "flex flex-col absolute z-100 top-15 bg-[#412c3a] opacity-80" : "hidden"}  md:bg-[#0E1920] text-white w-45 md:w-64 p-6  md:flex md:flex-col md:space-y-6 md:sticky md:top-0 md:h-screen md:overflow-y-auto shrink-0`}
    >
      <div className="md:block hidden ">
        <h1 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
          Melodies
        </h1>
      </div>

      <div>
        <h2 className="text-sm text-pink-400 mb-2">Menu</h2>
        <ul className="text-xs md:text-base space-y-2 py-2">
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <Link to={"/"}>
              <span>🏠</span> Home
            </Link>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <Link to={"/discover"}>
              <span>🔍</span>
              Discover
            </Link>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <Link to={"/album"}>
              <span>📀</span>
              Albums
            </Link>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <Link to={"/artist"}>
              <span>🎤</span>
              Artists
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-sm text-pink-400 mb-2">Library</h2>
        <ul className="text-xs md:text-base space-y-2 py-2">
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <Link to={"/recently-added"}>
              <span>🕒</span> Recently Added
            </Link>
          </li>
          <li className="hover:bg-pink-500 rounded-[10px] pl-2">
            <Link to={"/most-played"}>
              <span>🔥</span> Most played
            </Link>
          </li>
        </ul>
      </div>

      {isLogin && (
        <div>
          <h2 className="text-sm text-pink-400 mb-2">Playlist and favorite</h2>
          <ul className="text-xs md:text-base space-y-2 flex md:block">
            {/* <li className="hover:bg-pink-500 rounded-[10px] pl-2">
              <Link to={""}>
                <span>❤️</span> Your favorites
              </Link>
            </li> */}
            <li className="hover:bg-pink-500 rounded-[10px] pl-2">
              <Link to={"/your-playlist"}>
                <span>📃</span> Your playlist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}
