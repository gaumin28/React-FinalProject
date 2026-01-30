import Sidebar from "./Sidebar";
import melody_big_logo from "../image/melody_big_logo.png";
import { useState } from "react";

export default function ContactPage({
  isLogin,
  setIdThemeSelected,
  idThemeSelected,
}) {
  const [value, setValue] = useState({
    issues: "select-issue",
    content: "",
    fname: "",
    email: "",
    tel: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Sidebar
        isLogin={isLogin}
        setIdThemeSelected={setIdThemeSelected}
        idThemeSelected={idThemeSelected}
      />
      <main className="flex-1 p-4 md:p-6">
        <section className="max-w-4xl mx-auto flex flex-col gap-6">
          <img
            className="size-48 self-center"
            src={melody_big_logo}
            alt="melody logo"
          />
          <div className="text-center">
            <h2 className="section-title">Contact us</h2>
            <p className="text-gray-300 mt-2">
              We always listen to your feedback so that we can improve and
              upgrade the Melody website. Share your ideas with us.
            </p>
          </div>
          <form
            className="card-surface rounded-2xl p-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              alert("We have received your feedback!");
              setValue((prev) => {
                return {
                  ...prev,
                  issues: "select-issue",
                  content: "",
                  fname: "",
                  email: "",
                  tel: "",
                };
              });
            }}
          >
            <div>
              <label className="form-label" htmlFor="issues">
                Select the issue you need assistance with
              </label>
              <select
                required
                className="input-field w-full rounded-xl px-4 py-2 mt-2"
                name="issues"
                id="issues"
                value={value.issues}
                onChange={handleChange}
              >
                <option className="text-black" value="select-issue">
                  Select the issue you need to contact
                </option>
                <option className="text-black" value="error">
                  Report an error
                </option>
                <option className="text-black" value="product">
                  Product feedback
                </option>
                <option className="text-black" value="other">
                  Other issues
                </option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="content">
                Message
              </label>
              <textarea
                required
                className="input-field w-full rounded-xl px-4 py-2 mt-2"
                name="content"
                id="content"
                value={value.content}
                onChange={handleChange}
                rows={5}
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="fname">
                  Full name
                </label>
                <input
                  className="input-field w-full rounded-xl px-4 py-2 mt-2"
                  required
                  type="text"
                  id="fname"
                  value={value.fname}
                  name="fname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input-field w-full rounded-xl px-4 py-2 mt-2"
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={value.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="tel">
                  Phone number
                </label>
                <input
                  className="input-field w-full rounded-xl px-4 py-2 mt-2"
                  required
                  type="tel"
                  id="tel"
                  name="tel"
                  value={value.tel}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="btn btn-primary w-full">Send message</button>
          </form>
        </section>
      </main>
    </>
  );
}
