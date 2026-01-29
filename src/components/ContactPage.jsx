import Sidebar from "./Sidebar";
import melody_big_logo from "../image/melody_big_logo.png";
import { useState } from "react";
import ChatBot from "./ChatBot";

export default function ContactPage() {
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
      <Sidebar />
      <section className="mx-auto flex flex-col gap-5">
        <img
          className="size-60 self-center"
          src={melody_big_logo}
          alt="melody logo"
        />
        <div>
          <h2>Contact us</h2>
          <p>
            We always listen to your feedback so that we can improve and upgrade
            my Melody website more perfect. Don't hesitate to share your ideas
            with us.
          </p>
        </div>
        <form
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
          <label htmlFor="issues">
            Select the issue you need assisstance with:
          </label>
          <br />
          <select
            required
            className="border border-[#ddd] rounded p-1 my-1"
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
          <br />
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            required
            className="border
            border-[#ddd] rounded outline-0 my-1"
            name="content"
            id="content"
            value={value.content}
            onChange={handleChange}
            rows={4}
            cols={35}
          ></textarea>
          <br />
          <label htmlFor="fname">Full name:</label>
          <br />
          <input
            className="border border-[#ddd] rounded p-1 w-70 my-1"
            required
            type="text"
            id="fname"
            value={value.fname}
            name="fname"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="border border-[#ddd] rounded p-1 w-70 my-1"
            required
            type="email"
            name="email"
            id="email"
            value={value.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="tel">Phone number:</label>
          <br />
          <input
            className="border border-[#ddd] rounded p-1 w-70 my-1"
            required
            type="tel"
            id="tel"
            name="tel"
            value={value.tel}
            onChange={handleChange}
          />
          <br />
          <button className="cursor-pointer w-15 rounded p-1 bg-pink-400 mt-1">
            Send
          </button>
        </form>
      </section>
    </>
  );
}
