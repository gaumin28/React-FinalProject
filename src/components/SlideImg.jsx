import { useState } from "react";

export default function SlideImg() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section className="slideImg">
      <div className="container flex mx-auto md:w-3/4">
        <div
          onClick={() => setActivePanel(0)}
          className={`panel ${
            activePanel === 0 ? "active" : ""
          } flex-1 relative mx-2.5 h-70 cursor-pointer text-white rounded-[50px] bg-cover bg-center bg-no-repeat bg-[url('./image/Billie-Eilish.jpg')]`}
        >
          <h3 className="text-xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent opacity-0 m-0 absolute bottom-5 left-5">
            Melodies
          </h3>
        </div>
        <div
          onClick={() => setActivePanel(1)}
          className={`panel ${
            activePanel === 1 ? "active" : ""
          }  flex-1 relative mx-2.5 h-70 cursor-pointer text-white rounded-[50px] bg-cover bg-center bg-no-repeat bg-[url('./image/Eminem-background.jpg')]`}
        >
          <h3 className="text-xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent opacity-0 m-0 absolute bottom-5 left-5">
            Melodies
          </h3>
        </div>
        <div
          onClick={() => setActivePanel(2)}
          className={`panel ${
            activePanel === 2 ? "active" : ""
          }  flex-1 relative mx-2.5 h-70 cursor-pointer text-white rounded-[50px] bg-cover bg-center bg-no-repeat bg-[url('./image/Adele-background.jpg')]`}
        >
          <h3 className="text-xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent opacity-0 m-0 absolute bottom-5 left-5">
            Melodies
          </h3>
        </div>
      </div>
    </section>
  );
}
