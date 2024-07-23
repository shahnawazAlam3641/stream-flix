import React from "react";
import streamflixBG from "../assets/streamflixBG.jpg";
import streamflixLogo from "../assets/Stream-flix.png";
import tv from "../assets/tv.png";
import streamflixVideo1 from "../assets/streamflixVideo1.mp4";
import mobile from "../assets/mobile.jpg";
import boxShot from "../assets/boxshot.png";
import downloadGif from "../assets/download-gif.gif";
import devicePile from "../assets/device-pile.png";
import streamflixVideo2 from "../assets/streamflixVideo2.mp4";
import children from "../assets/children.png";

const Login = () => {
  return (
    <div className="flex flex-col bg-black items-center">
      <div
        className="w-[100vw] h-[100vh] flex flex-col items-center"
        style={{ backgroundImage: `url(${streamflixBG})` }}
      >
        <div className="w-full">
          <img src={streamflixLogo} alt="logo" className="w-60 mx-20 my-5" />
        </div>

        <div className="flex flex-col items-center w-[450px] bg-opacity-75 bg-black max-w-[90%] rounded-sm">
          <h1 className="text-white font-bold text-4xl p-8">Sign In</h1>
          <form className="flex flex-col gap-2 w-full items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
            />
            <button className="bg-red-600 w-[75%] py-2 rounded-md text-white">
              Sign In
            </button>
            <div className="w-[75%] py-8">
              <p className="text-white cursor-pointer">
                <span className="text-gray-500">New to Stream-Flix?</span> Sign
                Up Now.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex flex-col  max-w-[1030px] items-center lg:flex-row py-20">
        <div className=" flex flex-col gap-6  lg:w-[50%]">
          <h1 className="text-2xl font-extrabold text-center lg:text-[3rem]">
            Enjoy on your TV
          </h1>
          <p className="font-bold text-lg text-center lg:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative  w-[50%] flex justify-center  ">
          <img src={tv} alt="tv" className=" w-[508px] z-50" />
          <video
            autoPlay
            loop
            className="w-[370px]  absolute top-[50%] translate-y-[-54%] "
          >
            <source src={streamflixVideo1} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex   max-w-[1030px] items-center">
        <div className="relative py-20 w-[50%] flex justify-center">
          <img src={mobile} alt="mobile" />
          <div className="flex absolute bottom-24 gap-4 items-center p-2 border-gray-500 border-2 rounded-xl bg-black">
            <img src={boxShot} alt="poster" className="h-20" />
            <div>
              <p>Stranger Things</p>
              <p className="text-blue-600">Downloading...</p>
            </div>
            <img src={downloadGif} alt="download" className="h-[3.75rem]" />
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-6 ">
          <h1 className="text-6xl font-extrabold">
            Download your shows to watch offline
          </h1>
          <p className="font-semibold text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex   max-w-[1030px] items-center">
        <div className="w-[50%] flex flex-col gap-6">
          <h1 className="text-6xl font-extrabold">Watch everywhere</h1>
          <p className="font-semibold text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="relative py-20 w-[50%] flex justify-center">
          <img src={devicePile} alt="tv" className=" w-[508px] z-50" />
          <video autoPlay loop className="w-80  absolute top-28 ">
            <source src={streamflixVideo2} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex   max-w-[1030px] items-center">
        <div className="relative py-20 w-[50%] flex justify-center">
          <img src={children} alt="mobile" />
        </div>
        <div className="w-[50%] flex flex-col gap-6 ">
          <h1 className="text-6xl font-extrabold">Create profiles for kids</h1>
          <p className="font-semibold text-2xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div>
        <h1>Frequently Asked Questions</h1>
        <div>
          <div>What is Stream-Flix?</div>
          <div>answer</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
