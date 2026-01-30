import MelodyLogo from "../image/MelodyLogo.png";
import LoginBackground from "../image/LoginBackground.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    favoriteSongs: [],
  });
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(formData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513911fdb0c381f6e2b9a6",
        formData,
      );
      setMessage("Account created successfully!");
      console.log("Response:", response.data);
      setFormData({
        userName: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage("Error, please try again.");
      console.error("Error:", error);
    }
  }

  return (
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
          <p className="auth-subtitle">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="form-label" htmlFor="userName">
              Name
            </label>
            <input
              id="userName"
              name="userName"
              className="input-field w-full rounded-xl px-4 py-2"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="input-field w-full rounded-xl px-4 py-2"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="input-field w-full rounded-xl px-4 py-2"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              className="input-field w-full rounded-xl px-4 py-2"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Create account
          </button>

          <p className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link className="text-pink-300 hover:text-pink-200" to={"/login"}>
              Login
            </Link>
          </p>
        </form>

        {message && (
          <p className="text-center text-sm text-white mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}
