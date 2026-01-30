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
        className="auth-shell"
      >
        <div className="auth-card text-white">
          <div className="flex flex-col items-center gap-3 mb-6">
            <img className="auth-logo" src={MelodyLogo} alt="Melody Logo" />
            <h2 className="text-2xl font-extrabold bg-clip-text bg-linear-to-r from-[#ee10b0] to-[#0e9eef] text-transparent">
              Melodies
            </h2>
            <p className="auth-subtitle">Login to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="input-field w-full rounded-xl px-4 py-2"
                ref={inputValue}
                type="email"
                name="email"
                placeholder="E-mail"
                id="email"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="input-field w-full rounded-xl px-4 py-2"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                ref={inputPassword}
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="text-sm text-pink-300 hover:text-pink-200"
                to={"/forgot-password"}
              >
                Forgot password?
              </Link>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>

          <div className="auth-divider my-6">
            <span className="flex-1 h-px bg-white/10" />
            <span>or</span>
            <span className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%2Fintro%2Fsigning-in-to-google&dsh=S-603327768%3A1762845791679965&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en-US&ifkv=ARESoU3mX1z46VVUL_70r4szPVneDiFQJHQJ9qRB7HZR_knVcGwiM9MtuGt6GZk2F94Rz92GNKAYAQ&service=accountsettings"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <img className="size-5" src={google} alt="Google Logo" />
              <span className="text-sm">Google</span>
            </Link>
            <Link
              to="https://www.facebook.com/?locale=vi_VN"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <img className="size-5" src={facebook} alt="Facebook Logo" />
              <span className="text-sm">Facebook</span>
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-300">
            Don’t have an account?{" "}
            <Link className="text-pink-300 hover:text-pink-200" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
