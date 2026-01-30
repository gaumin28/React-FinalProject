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
        className="auth-shell"
      >
        <div className="auth-card text-white">
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
            <h2 className="section-title text-white mb-2">Check Your Email</h2>
            <p className="text-gray-300">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </div>

          <div className="card-surface rounded-lg p-4 mb-6 text-left">
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
            className="btn btn-primary w-full"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url(${LoginBackground})` }}
      className="auth-shell"
    >
      <div className="auth-card text-white">
        <h1 className="section-title text-center">Forgot Password?</h1>
        <p className="text-gray-300 text-center mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field w-full rounded-xl px-4 py-2"
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
            className={`btn w-full ${isLoading ? "btn-ghost" : "btn-primary"}`}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="auth-divider my-6">
          <span className="flex-1 h-px bg-white/10" />
          <span>or</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="space-y-3">
          <Link
            to="/login"
            className="block text-center text-pink-300 hover:text-pink-200 font-semibold"
          >
            Back to Login
          </Link>
          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-pink-300 hover:text-pink-200">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
