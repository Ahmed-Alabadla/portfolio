import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import htmlCss from "../assets/portfolio/htmlCss.png";
import tanweel from "../assets/portfolio/tanweel.png";
import aljode from "../assets/portfolio/aljode.png";
import weather from "../assets/portfolio/weather.png";
import todo from "../assets/portfolio/todo.png";
import { MdClose } from "react-icons/md";
import { Tilt } from "react-tilt";
import Fade from "react-reveal/Fade";

import BarLoader from "react-spinners/BarLoader";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [itemClick, setItemClick] = useState(null);

  const projects = [
    {
      id: 1,
      title: "HTML And CSS Template",
      src: htmlCss,
      description:
        "It is an application of what you have learned in HTML and CSS.",
      url: "https://ahmed-alabadla.github.io/template/",
      code: "https://github.com/Ahmed-Alabadla/template.git",
      done: true,
      showCode: true,
    },
    {
      id: 2,
      title: "Tanweel",
      src: tanweel,
      description:
        "I was part of the work team, Which was assign me to program the landing page, and programmed it using Bootstrap.",
      url: "https://ahmed-alabadla.github.io/tanweel/",
      code: "https://github.com/Ahmed-Alabadla/tanweel.git",
      done: true,
      showCode: false,
    },
    {
      id: 3,
      title: "Aljode",
      src: aljode,
      description:
        "I was part of the work team, Which was assign me to program the landing page, and programmed it using Tailwind CSS.",
      url: "https://ahmed-alabadla.github.io/aljode/",
      code: "https://github.com/Ahmed-Alabadla/aljode.git",
      done: true,
      showCode: false,
    },
    {
      id: 4,
      title: "Weather App",
      src: weather,
      description:
        "It is an application of what you learned in React JS and how to work with api using REST-API.",
      url: "https://ahmed-alabadla.github.io/weather-app/",
      code: "https://github.com/Ahmed-Alabadla/weather-app.git",
      done: true,
      showCode: true,
    },
    {
      id: 5,
      title: "ToDo list App",
      src: todo,
      description:
        "It is an application of what you learned in ( Tailwind CSS , React JS and Redux) and how to work with api using REST-API.",
      url: "https://todo-list-tasks-app.000webhostapp.com/",
      code: "https://github.com/Ahmed-Alabadla/ToDo-List-App.git",
      done: false,
      showCode: true,
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-light dark:bg-gradient-to-b dark:from-gray-800 dark:to-black w-full md:h-screen overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full dark:text-white ">
        <Fade left distance="20%" duration={1500}>
          <div className="pb-8">
            <p className="text-4xl font-bold flex flex-col w-full">
              Portfolio
              <span className="mt-1">
                <BarLoader
                  color="#06b6d4"
                  width={143}
                  loading={true}
                  size={30}
                />
              </span>
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
        </Fade>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-9  px-12 sm:px-0 pb-10 sm:pb-0 ">
          {/* cards */}
          <Fade top distance="10%" duration={1500}>
            {projects.map((item) => (
              <>
                <Tilt options={{ max: 25, scale: 1 }} key={item.id}>
                  <div className="relative shadow-md shadow-gray-300 dark:shadow-gray-500 rounded-lg mb-10 sm:mb-0  group duration-300 hover:scale-105 h-52">
                    <div
                      className="flex items-center justify-center bg-cyan-500 absolute rounded-lg w-full h-full top-1/2 left-1/2 opacity-0 -z-0 -translate-x-1/2 -translate-y-1/2 group-hover:animate-show"
                      style={{ animationFillMode: "both" }}
                    >
                      <button
                        className="py-4 "
                        onClick={() => {
                          setShow(true);
                          setItemClick(item);
                        }}
                      >
                        <AiFillEye size={40} />
                      </button>
                    </div>
                    <img
                      src={item.src}
                      alt=""
                      className="rounded-md w-full h-full"
                    />
                  </div>
                </Tilt>
              </>
            ))}
          </Fade>
          {/* Modal */}

          {show && (
            <div className="absolute z-10 ">
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div
                  className="fixed inset-0 bg-gray-600 bg-opacity-70 transition-opacity"
                  onClick={() => setShow(false)}
                ></div>

                <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
                  <div className="relative bg-white dark:bg-slate-800  rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="p-4 flex justify-between">
                      <h3 className="text-xl font-medium">
                        {itemClick?.title} {"  "}
                        {itemClick?.done ? "" : "( Coming soon )"}
                      </h3>
                      <button onClick={() => setShow(false)}>
                        <MdClose size={25} className="text-red-500" />
                      </button>
                    </div>
                    <hr className="dark:border-gray-500" />
                    <img
                      src={itemClick?.src}
                      alt=""
                      className="p-5 w-[550px] h-80"
                    />
                    <p className="px-4 pb-4 text-center text-gray-700 dark:text-gray-300">
                      {itemClick?.description}
                    </p>
                    {itemClick?.done ? (
                      <>
                        <hr className="dark:border-gray-500" />
                        <div className="bg-gray-50 dark:bg-slate-800 p-4  flex justify-center gap-5">
                          {itemClick?.showCode && (
                            <a
                              href={itemClick?.code}
                              target="_blank"
                              rel="noreferrer"
                              className="text-white font-medium bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  flex items-center justify-center rounded-md  duration-300 hover:scale-105"
                            >
                              Code
                            </a>
                          )}

                          <a
                            href={itemClick?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white font-medium bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  flex items-center justify-center rounded-md  duration-300 hover:scale-105"
                          >
                            Demo
                          </a>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* --------------- */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
