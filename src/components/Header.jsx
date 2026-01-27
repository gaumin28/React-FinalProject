import { Link } from "react-router";

export default function Header({ setIsSidebar }) {
  // Get username from localStorage to display greeting
  // const userName = localStorage.getItem("userName");
  function handleToggleSidebar() {
    setIsSidebar((prev) => !prev);
  }
  return (
    <header className="w-20 p-2 mr-10 md:hidden ">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handleToggleSidebar}
          aria-label="Toggle menu"
          className="p-1 rounded-md bg-pink-500 text-black font-bold"
        >
          ☰
        </button>

        <h1 className="text-lg font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
          Melodies
        </h1>
      </div>
    </header>
  );
}
