import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 mb-6 sticky top-0 bg-transparent z-10">
      <div className="relative flex-1 md:ml-20">
        <a
          id="search-icon"
          className="absolute inset-y-0 left-3 flex items-center"
          href="#"
        >
          <svg
            className="w-5 opacity-80"
            alt="search icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </a>
        <input
          id="search-input"
          className="w-full max-w-md bg-[#656565] px-10 py-2 rounded-lg text-gray-200"
          type="text"
          placeholder="Search For Musics, Artists, Albums"
        />
      </div>

      <div className="hidden md:flex gap-4 md:mr-20 auth-area">
        <Link
          to="/login"
          className="bg-black hover:bg-pink-600 hover:text-black px-5 py-2 rounded-full text-pink-400 font-bold min-w-30 text-center"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="border border-white text-black bg-pink-500 hover:bg-black hover:text-pink-400 px-5 py-2 rounded-full font-bold min-w-30 text-center"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
