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

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-15">
            <Link className="ml-10" to={"/login"}>
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </Link>
            <h1 className="text-white text-2xl self-center">
              Sign Up To Continue
            </h1>
            <label htmlFor="userName"></label>
            <br />
            <input
              id="userName"
              name="userName"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Name"
            />

            <label htmlFor="email"></label>
            <br />
            <input
              id="email"
              name="email"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
            />

            <label htmlFor="password"></label>
            <br />
            <input
              id="password"
              name="password"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />

            <label htmlFor="phoneNumber"></label>
            <br />
            <input
              id="phoneNumber"
              name="phoneNumber"
              className="bg-[#612c4f] text-white w-87.5 h-10.5 rounded-[20px] pl-4 mx-auto"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />

            <div className="flex justify-end mt-10">
              <button
                type="submit"
                className="flex justify-end text-white bg-pink-800 rounded-[20px] px-8 py-1 mr-10 opacity-100 cursor-pointer"
              >
                Create an account
              </button>
            </div>

            <p className="self-center text-md">
              Already have account?{" "}
              <Link className="text-blue-400" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
          {message && <p className="self-center text-white mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
}
