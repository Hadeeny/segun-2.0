import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
const Contact = () => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAni = {
    initial: { opacity: 0, x: 600 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        // ease: [0.6, 0.01, -0.05, 0.95, 0.3],
        duration: 1,
      },
    },
  };
  const title = "Contact";
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const form = useRef(null);

  const submitHandler = (data) => {
    emailjs
      .sendForm(
        "service_i29av13",
        "template_wzidt6c",
        form.current,
        "3auW9BVfFWcZ1hPrn"
      )
      .then(
        (result) => {
          console.log("successful", result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetField("message");
    resetField("from_name");
    resetField("reply_to");
  };
  return (
    <section
      id="contact"
      className="w-10/12 text-secondary h-screen flex flex-col 
        items-start gap-y-2 md:gap-y-6 mx-auto"
    >
      <div className="mt-[4rem] flex items-center w-full">
        <div className="text-[1.5rem] text-rouge">03.</div>
        <motion.div
          variants={banner}
          initial="initial"
          whileInView="animate"
          className="text-[1.5rem] font-oxanium font-bold px-2 min-w-max"
        >
          {title.split("").map((letters, i) => (
            <motion.span key={i} variants={letterAni}>
              {letters}
            </motion.span>
          ))}
        </motion.div>
        <div className="h-[0.2rem] bg-leMon w-full"></div>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit(submitHandler)}
        className=" space-y-5 mt-[3rem] w-full md:w-1/2"
      >
        <div className="flex flex-col gap-y-2">
          <label>Name</label>
          <input
            required
            {...register("from_name", { required: true })}
            // onChange={(e) => setName(e.target.value)}
            className="outline-none rounded border border-rouge bg-transparent p-2"
            type="text"
            placeholder="enter your name"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Email</label>
          <input
            required
            {...register("reply_to", { required: true })}
            // onChange={(e) => setEmail(e.target.value)}
            className="outline-none rounded border border-rouge bg-transparent p-2"
            type="email"
            placeholder="enter your email"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label>Message</label>
          <textarea
            {...register("message", { required: true })}
            required
            // onChange={(e) => setMessage(e.target.value)}
            className="outline-none rounded border border-rouge bg-transparent p-2"
            type="text"
            placeholder="drop a message"
          />
        </div>
        <input
          className="border border-leMon translate-y-6 shadow-3xl w-full md:w-1/3 h-[3rem] rounded cursor-pointer duration-500 hover:text-white hover:tracking-[0.3rem] text-leMon"
          type="submit"
        />
      </form>
    </section>
  );
};

export default Contact;
