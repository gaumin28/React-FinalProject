import { Link } from "react-router";

export default function Header({ isLogin, setIsLogIn }) {
  const userName = localStorage.getItem("userName");
  return (
    <header className="flex items-center justify-between p-4 md:hidden bg-[#0E1920]">
      <div className="flex items-center gap-3">
        <button
          id="toggleSidebar"
          aria-label="Toggle menu"
          className="p-2 rounded-md bg-pink-500 text-black font-bold"
        >
          ☰
        </button>
        <h1 className="text-lg font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
          Melodies
        </h1>
        {isLogin ? (
          <>
            <span className="px-3 py-1 text-pink-400 font-bold">
              Hello, {userName}
            </span>
            <button onClick={() => setIsLogIn(false)} className="logoutBtn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="px-3 py-1 bg-black rounded-full text-pink-400 font-bold"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-3 py-1 bg-pink-500 rounded-full text-black font-bold"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
