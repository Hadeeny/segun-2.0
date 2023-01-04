import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${name}, email: ${email}, message: ${message}`);
  };
  return (
    <section
      className="w-10/12 text-secondary h-screen flex flex-col 
        items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <div className="mt-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-primary">02.</div>
        <div className="text-[1.5rem] font-bold px-2 min-w-max">
          <h2>Contact</h2>
        </div>
        <div className="h-[0.2rem] bg-[#bae67e] w-full"></div>
      </div>
      <form
        onSubmit={submitHandler}
        className=" space-y-5 mt-[3rem] w-full md:w-1/2"
      >
        <div className="flex flex-col gap-y-2">
          <label>Name</label>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            className="outline-none rounded border border-primary bg-transparent p-2"
            type="text"
            placeholder="enter your name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none rounded border border-primary bg-transparent p-2"
            type="email"
            placeholder="enter your email"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Message</label>
          <input
            required
            onChange={(e) => setMessage(e.target.value)}
            className="outline-none rounded border border-primary bg-transparent p-2"
            type="text"
            placeholder="drop a message"
          />
        </div>
        <input
          className="bg-leMon px-6 rounded cursor-pointer text-[#202838] py-2"
          type="submit"
        />
      </form>
    </section>
  );
};

export default Contact;
