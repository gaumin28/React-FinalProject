import MelodyLogo from "../image/MelodyLogo.png";
import LoginBackground from "../image/LoginBackground.jpg";
import google from "../image/google.png";
import facebook from "../image/facebook.png";
import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function LoginPage({ setIsLogIn }) {
  const navigate = useNavigate();
  const inputValue = useRef();
  const inputPassword = useRef();
  async function handleSubmit(event) {
    event.preventDefault();

    const email = inputValue.current?.value?.trim();
    const password = inputPassword.current?.value || "";
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }
    try {
      // Fetch users
      const res = await axios.get(
        "https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513911fdb0c381f6e2b9a6",
      );
      const users = res.data.data.data || [];

      // Find by email (or username if that’s your key)
      const user = users.find((u) => u.email === email);

      if (!user) {
        alert("User not found");
        return;
      }

      // Check password
      if (user.password !== password) {
        alert("Wrong password");
        return;
      }

      // Login successful - show loading page then navigate home
      localStorage.setItem("userName", user.userName);
      navigate("/loading");
      setTimeout(() => {
        navigate("/");
        setIsLogIn(true);
      }, 500);
      // proceed to login success / navigate
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  }

  // useEffect(() => {
  //   const api =
  //     "https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513911fdb0c381f6e2b9a6";
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(api);
  //       const data = response.data.data.data;
  //       setData(data);
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       console.error("Error: ", error);
  //     }
  //   }
  //   fetchData();
  //   console.log(data);
  // }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${LoginBackground})` }}
        className="w-107.5 h-233 mx-auto"
      >
        <div className="bg-linear-to-br from-[#412c3a] to-[#0E1920] h-233 opacity-80 rounded">
          <div className="flex flex-col justify-around h-184.25 bg-[#412c3a] rounded-b-4xl">
            <div className="self-center flex flex-col gap-4">
              <img src={MelodyLogo} alt="Melody Logo" />
              <h2 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
                Melodies
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-white self-center">Login To Continue</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="email"></label>
                <input
                  className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
                  ref={inputValue}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  id="email"
                />
                <label htmlFor="password"></label>
                <input
                  className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  ref={inputPassword}
                />
                <div className="flex justify-around">
                  <Link className="text-white" to={"/forgot-password"}>
                    Forgot password <span className="text-2xl"></span>
                  </Link>
                  <button
                    className="text-white bg-pink-500 rounded-md px-8 py-1 cursor-pointer"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-around">
              <Link
                to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%2Fintro%2Fsigning-in-to-google&dsh=S-603327768%3A1762845791679965&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en-US&ifkv=ARESoU3mX1z46VVUL_70r4szPVneDiFQJHQJ9qRB7HZR_knVcGwiM9MtuGt6GZk2F94Rz92GNKAYAQ&service=accountsettings"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center gap-4 border border-white w-47.5 h-10.5 rounded-2xl px-4 py-4">
                  <img
                    className="size-6 self-center"
                    src={google}
                    alt="Google Logo"
                  />
                  <p className="text-white self-center">Google Login</p>
                </div>
              </Link>
              <Link
                to="https://www.facebook.com/?locale=vi_VN"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center gap-4 border border-white w-47.5 h-10.5 rounded-2xl px-4 py-4">
                  <img
                    className="size-6 self-center"
                    src={facebook}
                    alt="Facebook Logo"
                  />
                  <p className="text-white self-center">Facebook Login</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex justify-around items-center">
            <div className="text-white pt-20">
              <h2>Don't Have An Acount</h2>
              <p>Sign Up Here</p>
            </div>
            <div className="mt-20">
              <Link
                className="text-white bg-blue-500 rounded-md px-8 py-1"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
