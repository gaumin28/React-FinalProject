import { useState } from "react";
import { useNavigate, Link } from "react-router";
import LoginBackground from "../image/LoginBackground.jpg";
import axios from "axios";

export default function ForgotPassword() {
  // State to store the email input
  const [email, setEmail] = useState("");
  // State to track if form has been submitted
  const [submitted, setSubmitted] = useState(false);
  // State to handle loading while processing request
  const [isLoading, setIsLoading] = useState(false);
  // State to store error messages
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Validate email is not empty
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.get(
        "https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69513911fdb0c381f6e2b9a6",
      );
      const users = response.data.data.data || [];
      const user = users.find((u) => u.email === email);

      if (!user) {
        alert("Email does not exist, please sign up");
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true); // Show success message
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  if (submitted) {
    return (
      <div
        style={{ backgroundImage: `url(${LoginBackground})` }}
        className="w-107.5 h-233 mx-auto"
      >
        <div className="bg-linear-to-br from-[#412c3a] to-[#0E1920] h-233 opacity-80 rounded">
          <div className="flex flex-col justify-center gap-10 h-233 bg-[#412c3a] rounded-b-4xl p-8">
            <div className="mb-6 text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-300">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
            </div>

            <div className="bg-[#1a1a2e] rounded p-4 mb-6 text-left">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-pink-400">Next steps:</span>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Check your email inbox</li>
                <li>Click the reset link</li>
                <li>Create a new password</li>
              </ul>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Didn't receive an email? Check your spam folder or try again.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url(${LoginBackground})` }}
      className="w-107.5 h-233 mx-auto"
    >
      <div className="bg-linear-to-br from-[#412c3a] to-[#0E1920] h-233 opacity-80 rounded">
        <div
          className="flex flex-col justify-center gap-10 h-233
         bg-[#412c3a] rounded-b-4xl p-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Forgot Password?
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#1a1a2e] border border-pink-500 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-2 px-4 rounded transition duration-200 ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600 text-white"
              }`}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          <div className="space-y-3">
            <Link
              to="/login"
              className="block text-center text-pink-400 hover:text-pink-300 font-semibold"
            >
              Back to Login
            </Link>
            <p className="text-center text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-pink-400 hover:text-pink-300">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
