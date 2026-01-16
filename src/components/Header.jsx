export default function Header() {
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
      </div>
      <div className="flex gap-2 auth-area">
        <a
          className="px-3 py-1 bg-black rounded-full text-pink-400 font-bold"
          href="./Login.html"
        >
          Login
        </a>
        <a
          className="px-3 py-1 bg-pink-500 rounded-full text-black font-bold"
          href="./SignUp.html"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}
