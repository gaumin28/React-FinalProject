import MelodyLogo from "../image/MelodyLogo.png";
import LoginBackground from "../image/LoginBackground.jpg";

export default function SignUpPage() {
  return (
    <div
      style={{ backgroundImage: `url(${LoginBackground})` }}
      className="w-107.5 h-233 mx-auto"
    >
      <div className="bg-linear-to-br from-[#412c3a] to-[#0E1920] h-233 opacity-80">
        <div className="flex flex-col justify-around h-233 bg-[#412c3a]">
          <div className="self-center flex flex-col gap-4">
            <img src={MelodyLogo} alt="Melody Logo" />
            <h2 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
              Melodies
            </h2>
          </div>

          <form id="signupForm" className="flex flex-col gap-4 mb-30">
            <a className="ml-10" href="./Login.html">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </a>
            <h1 className="text-white text-2xl self-center">
              Sign Up To Continue
            </h1>

            <input
              id="nameSignUp"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="text"
              placeholder="Name"
            />
            <input
              id="emailSignUp"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="email"
              placeholder="E-mail"
              required
            />
            <input
              id="passSignUp"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="password"
              placeholder="Password"
              required
            />
            <input
              id="phoneSignUp"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="tel"
              placeholder="Phone Number"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex justify-end text-white bg-pink-800 rounded-[20px] px-8 py-1 mr-10 opacity-100 cursor-pointer"
              >
                Create an account
              </button>
            </div>

            <p className="self-center text-md">
              Already have account?{" "}
              <a href="./Login.html" className="text-blue-400">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
