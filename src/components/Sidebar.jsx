import { useState } from "react";
import { Link } from "react-router";
import customer_service from "../image/customer-service.png";

import themeColor from "../data/colorTheme";

export default function Sidebar({
  isLogin,
  isSidebar,
  idThemeSelected,
  setIdThemeSelected,
}) {
  const [isSetting, setIsSetting] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function handleSetting() {
    setIsSetting((prev) => !prev);
  }
  function handleClick() {
    setIsClicked((prev) => !prev);
  }
  const themeSelected = themeColor.find(
    (theme) => theme.id === idThemeSelected,
  );
  function handleColorSelect(id) {
    setIdThemeSelected(id);
  }

  return (
    <aside
      className={` ${isSidebar ? "flex flex-col absolute z-100 top-15 bg-[#412c3a] opacity-80 " : "hidden"}  md:bg-[#0E1920] text-white w-45 md:w-64 p-6  md:flex md:flex-col md:space-y-6 md:sticky md:top-0 md:h-screen md:overflow-y-auto shrink-0`}
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
          <div>
            <h2 className="text-sm text-pink-400 mb-2">
              Playlist and favorite
            </h2>
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
          <div className="mt-10">
            <h2
              onClick={handleSetting}
              className="text-lg text-white mb-2 cursor-pointer "
            >
              <span>⚙️</span>Setting
            </h2>
            {isSetting && (
              <div>
                <h3 className="text-sm">Theme</h3>

                <div
                  onClick={handleClick}
                  className={`h-15 w-20 ${themeSelected.style} rounded flex justify-end items-end cursor-pointer`}
                >
                  <span className="text-[10px] font-bold">
                    {themeSelected.color}
                  </span>
                </div>
              </div>
            )}
            {isSetting && isClicked && (
              <div className="absolute flex flex-wrap h-80 w-30 bg-white top-85 left-30 rounded-md">
                {themeColor
                  .filter((theme) => theme.id !== idThemeSelected)
                  .map((theme) => (
                    <div
                      key={theme.id}
                      onClick={() => handleColorSelect(theme.id)}
                      className={`${theme.style} flex justify-center items-center cursor-pointer m-auto w-12 h-8`}
                    >
                      <span className="font-thin text-[10px]">
                        {theme.color}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
      <div>
        <Link className="flex gap-2" to={"/contact"}>
          <img
            className="size-6 text-white"
            src={customer_service}
            alt="customer service"
          />{" "}
          Contact
        </Link>
      </div>
    </aside>
  );
}
