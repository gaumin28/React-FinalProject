import image1 from "../image/facebook.png";
import image2 from "../image/Instagram.png";
import image3 from "../image/Tweeter.png";
import image4 from "../image/call.png";
import { Link, useNavigate } from "react-router";

export default function Footer({ isLogin }) {
  const nav = useNavigate();
  return (
    <footer className="mt-10">
      <div className="footer-panel max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-sm">
            Melodies is a website that has been created for over{" "}
            <span className="text-pink-400">5 years </span>
            now and it is one of the most famous music player websites in the
            world. In this website you can listen and download songs for free.
            Also of you want no limitation you can buy our
            <span className="text-blue-400"> premium pass</span>.
          </p>
        </div>

        <div className="md:col-span-1 flex justify-around md:flex-row md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Melody</h3>
            <hr className="border-t border-gray-600" />
            <span
              onClick={() =>
                nav("/play-music", { state: { isLogin: isLogin } })
              }
              className="hover:underline cursor-pointer"
            >
              Songs
            </span>

            <Link
              to="https://podcasts.apple.com/vn/new?l=vi"
              className="hover:underline"
            >
              Podcast
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Access</h3>
            <hr className="border-t border-gray-600" />

            <Link to="/artist" className="hover:underline">
              Artists
            </Link>
            {isLogin && (
              <Link to="/your-playlist" className="hover:underline">
                Playlists
              </Link>
            )}
            <Link to="/album" className="hover:underline">
              Albums
            </Link>
            <Link to="/most-played" className="hover:underline">
              Trending
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Contact</h3>
            <hr className="border-t border-gray-600" />

            <div className="policy-container relative">
              <span className="hover:underline cursor-pointer">Policy</span>
              <p className="policy-hover-text absolute left-0 top-full mt-2 bg-black border border-pink-400 rounded-lg p-3 text-xs w-64 opacity-0 invisible transition-all duration-200 z-10">
                Our privacy policy ensures your data protection and outlines how
                we collect, use, and safeguard your information while using
                Melodies.
              </p>
            </div>
            <Link to="/facebook" className="hover:underline">
              Social Media
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <h2 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
            Melodies
          </h2>
          <div className="flex gap-3 mt-4">
            <Link to="/facebook">
              <img src={image1} alt="facebook" className="w-6 h-6" />
            </Link>
            <Link to="/x">
              <img src={image3} alt="twitter" className="w-6 h-6" />
            </Link>
            <Link to="/instagram">
              <img src={image2} alt="instagram" className="w-6 h-6" />
            </Link>
            <Link to="#">
              <img src={image4} alt="call" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
