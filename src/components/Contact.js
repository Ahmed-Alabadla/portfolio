import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const form = useRef();

  // handle form events
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handleSubmit
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_eayx81b",
        "template_wnzcqpg",
        form.current,
        "Rj2QulWvExeOM5G9k"
      )
      .then(
        (result) => {
          toast.success("Successfully Sent Message", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          reset();
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-light dark:bg-gradient-to-b dark:from-gray-800 dark:to-black p-6 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <Fade left distance="20%" duration={1500}>
          <div className="pb-8">
            <p className="text-4xl font-bold flex flex-col w-full">
              Contact me
              <span className="mt-1">
                <BarLoader
                  color="#06b6d4"
                  width={186}
                  loading={true}
                  size={30}
                />
              </span>
            </p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>
        </Fade>
        <Fade bottom distance="20%" duration={1500}>
          <div className="flex justify-center items-center">
            <form
              className="flex flex-col w-full md:w-[70%] gap-5"
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="px-3 py-3 bg-transparent border-2 rounded-md bg-white dark:bg-slate-700 dark:text-white  border-slate-300 dark:border-slate-600  text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500 pt-2 pl-2">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className=" bg-transparent border-2 rounded-md p-3 bg-white dark:bg-slate-700 dark:text-white  border-slate-300 dark:border-slate-600  text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:text-pink-600 dark:invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/gm,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 pt-2 pl-2">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Enter your message"
                  className="resize-none  p-3  bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                {errors.message && (
                  <span className="text-sm text-red-500 pt-2 pl-2">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="text-white font-medium bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center justify-center rounded-md  duration-300"
              >
                Send message
              </button>
            </form>
          </div>
        </Fade>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
