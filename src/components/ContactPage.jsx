import Sidebar from "./Sidebar";
import melody_big_logo from "../image/melody_big_logo.png";

export default function ContactPage() {
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
        <form action="">
          <label htmlFor="">Select the issue you need assisstance with:</label>
          <br />
          <select
            className="border border-[#ddd] rounded p-1"
            name="cars"
            id="cars"
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
          <label htmlFor="">Content:</label>
          <br />
          <textarea
            className="border
            border-[#ddd] rounded outline-0"
            name=""
            id=""
            rows={4}
            cols={35}
          ></textarea>
          <br />
          <label htmlFor="">Full name:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">Email:</label>
          <br />
          <input type="email" name="" id="" />
          <br />
          <label htmlFor="">Phone number:</label>
          <br />
          <input type="tel" />
          <br />
          <button>Send</button>
        </form>
      </section>
    </>
  );
}
