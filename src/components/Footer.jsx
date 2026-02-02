import image1 from "../image/facebook.png";
import image2 from "../image/Instagram.png";
import image3 from "../image/Tweeter.png";
import image4 from "../image/call.png";
import { Link, useNavigate } from "react-router";

export default function Footer({ isLogin }) {
  const nav = useNavigate();
  return (
    <footer className="footer-root mt-12">
      <div className="footer-panel footer-surface max-w-5xl mx-auto px-6 py-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Melodies is a website that has been created for over{" "}
              <span className="text-pink-400">5 years </span>
              now and it is one of the most famous music player websites in the
              world. In this website you can listen and download songs for free.
              Also of you want no limitation you can buy our
              <span className="text-blue-400"> premium pass</span>.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-around md:flex-row md:justify-between gap-6">
            <div className="footer-links flex flex-col gap-2">
              <h3 className="text-lg font-bold">Melody</h3>
              <hr className="footer-divider" />
              <span
                onClick={() =>
                  nav("/play-music", { state: { isLogin: isLogin } })
                }
                className="footer-link cursor-pointer"
              >
                Songs
              </span>

              <a href="/podcast" target="blank" className="footer-link">
                Podcast
              </a>
            </div>

            <div className="footer-links flex flex-col gap-2">
              <h3 className="text-lg font-bold">Access</h3>
              <hr className="footer-divider" />

              <Link to="/artist" className="footer-link">
                Artists
              </Link>
              {isLogin && (
                <Link to="/your-playlist" className="footer-link">
                  Playlists
                </Link>
              )}
              <Link to="/album" className="footer-link">
                Albums
              </Link>
              <Link to="/most-played" className="footer-link">
                Trending
              </Link>
            </div>

            <div className="footer-links flex flex-col gap-2">
              <h3 className="text-lg font-bold">Contact</h3>
              <hr className="footer-divider" />

              <div className="policy-container relative">
                <span className="footer-link cursor-pointer">Policy</span>
                <p className="policy-hover-text absolute left-0 top-full mt-2 bg-black border border-pink-400 rounded-lg p-3 text-xs w-64 opacity-0 invisible transition-all duration-200 z-10">
                  Our privacy policy ensures your data protection and outlines
                  how we collect, use, and safeguard your information while
                  using Melodies.
                </p>
              </div>
              <a target="blank" href="/facebook" className="footer-link">
                Social Media
              </a>
            </div>
          </div>

          <div className="footer-brand">
            <h2 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
              Melodies
            </h2>
            <p className="text-sm text-gray-300">
              Feel the beat. Share the vibe.
            </p>
            <div className="flex gap-3 mt-4">
              <a target="blank" href="/facebook" className="footer-social">
                <img src={image1} alt="facebook" className="w-6 h-6" />
              </a>
              <a target="blank" href="/x" className="footer-social">
                <img src={image3} alt="twitter" className="w-6 h-6" />
              </a>
              <a target="blank" href="/instagram" className="footer-social">
                <img src={image2} alt="instagram" className="w-6 h-6" />
              </a>
              <a target="blank" href="#" className="footer-social">
                <img src={image4} alt="call" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-8 pt-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <span>© 2026 Melodies. All rights reserved.</span>
          <span>Crafted with sound and love.</span>
        </div>
      </div>
    </footer>
  );
}
