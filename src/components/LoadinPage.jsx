import LoginBackground from "../image/LoginBackground.jpg";
import melody_big_logo from "../image/melody_big_logo.png";

export default function LoadingPage() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${LoginBackground})` }}
        className="w-107.5 h-233 mx-auto"
      >
        <div className=" bg-linear-to-br from-[#412c3a] to-[#0E1920] h-233 opacity-80 rounded">
          <div className="flex flex-col justify-center items-center h-233 bg-[#412c3a] rounded-b-4xl">
            <img className="w-50" src={melody_big_logo} alt="melody log" />
            <div className="flex gap-2">
              <h2 className="font-bold text-2xl text-gray-300">Loading </h2>
              <svg
                className="size-8 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
