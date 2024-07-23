import React, { useState } from "react";
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
import plus from "../assets/plus.svg";

const Login = () => {
  const [accordian, setAccordian] = useState({});

  const handleAccordian = (number) => {
    console.log("accordian clicked");
    setAccordian((oldState) => {
      const newState = { ...oldState };
      newState[number] = !oldState[number];
      return newState;
    });
  };

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
          <p className="font-bold text-lg text-center px-4 lg:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative  w-[50%] flex justify-center  ">
          <img src={tv} alt="tv" className=" w-[508px] z-50" />
          <video
            autoPlay
            loop
            className="w-[75%]  absolute   top-[50%] translate-y-[-54%] "
          >
            <source src={streamflixVideo1} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex flex-col-reverse  max-w-[1030px] items-center lg:flex-row py-20">
        <div className="relative py-20 w-[50%] flex justify-center">
          <img
            src={mobile}
            alt="mobile"
            className="max-w-[200%] md:max-w-[100%]"
          />
          <div className="flex  absolute bottom-24 gap-4 items-center justify-between p-2 border-gray-500 border-2 rounded-xl bg-black">
            <img src={boxShot} alt="poster" className="w-[15%]" />
            <div>
              <p className="text-[75%]">Stranger Things</p>
              <p className="text-blue-600 text-[75%]">Downloading...</p>
            </div>
            <img src={downloadGif} alt="download" className="w-[15%]" />
          </div>
        </div>
        <div className="flex flex-col gap-6  lg:w-[50%]">
          <h1 className="text-2xl font-extrabold text-center leading-none px-2 lg:text-[3rem]">
            Download your shows to watch offline
          </h1>
          <p className="font-bold text-lg text-center px-4 lg:text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex flex-col  max-w-[1030px] items-center lg:flex-row py-20">
        <div className="flex flex-col gap-6  lg:w-[50%]">
          <h1 className="text-2xl font-extrabold text-center lg:text-[3rem]">
            Watch everywhere
          </h1>
          <p className="font-bold text-lg text-center px-4 lg:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="relative py-20 w-[50%] flex justify-center">
          <img src={devicePile} alt="tv" className=" w-[508px] z-50" />
          <video
            autoPlay
            loop
            className="w-[65%]  absolute top-28 top-[50%] translate-y-[-85%]"
          >
            <source src={streamflixVideo2} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className=" text-white flex flex-col-reverse  max-w-[1030px] items-center lg:flex-row py-20">
        <div className="relative py-20 w-[50%] flex justify-center">
          <img src={children} alt="children" />
        </div>
        <div className="flex flex-col gap-6  lg:w-[50%]">
          <h1 className="text-2xl font-extrabold text-center leading-none lg:text-[3rem]">
            Create profiles for kids
          </h1>
          <p className="font-bold text-lg text-center px-4 lg:text-2xl ">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      <div className="text-white py-20 px-4 flex flex-col max-w-[1030px] items-center gap-2">
        <h1 className="text-2xl font-extrabold text-center pb-6 leading-none lg:text-[3rem]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-[1px] ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("one");
            }}
          >
            <p className="text-3xl font-semibold">What is Stream-Flix?</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              role="img"
              data-icon="PlusLarge"
              aria-hidden="true"
              className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className={`bg-white bg-opacity-15 p-7 text-3xl font-normal ${
              accordian.one ? "" : "hidden"
            }`}
          >
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br />
            <br /> You can watch as much as you want, whenever you want, without
            a single ad – all for one low monthly price. There's always
            something new to discover, and new TV shows and movies are added
            every week!
          </div>
        </div>

        <div className="flex flex-col gap-[1px] ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("two");
            }}
          >
            <p className="text-3xl font-semibold">
              How much does Stream-Flix cost?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              role="img"
              data-icon="PlusLarge"
              aria-hidden="true"
              className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className={`bg-white bg-opacity-15 p-7 text-3xl font-normal ${
              accordian.two ? "" : "hidden"
            }`}
          >
            Watch Stream-Flix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            ₹149 to ₹649 a month. No extra costs, no contracts.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("three");
            }}
          >
            <p className="text-3xl font-semibold">Where can I Watch?</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              role="img"
              data-icon="PlusLarge"
              aria-hidden="true"
              className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className={`bg-white bg-opacity-15 p-7 text-3xl font-normal ${
              accordian.three ? "" : "hidden"
            }`}
          >
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web from your personal computer or on any
            internet-connected device, including smart TVs, smartphones,
            tablets, streaming media players and game consoles.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("four");
            }}
          >
            <p className="text-3xl font-semibold">How do I cancel?</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              role="img"
              data-icon="PlusLarge"
              aria-hidden="true"
              className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className={`bg-white bg-opacity-15 p-7 text-3xl font-normal ${
              accordian.four ? "" : "hidden"
            }`}
          >
            Stream-Flix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("five");
            }}
          >
            <p className="text-3xl font-semibold">
              What can I watch on Stream-Flix?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              role="img"
              data-icon="PlusLarge"
              aria-hidden="true"
              className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className={`bg-white bg-opacity-15 p-7 text-3xl font-normal ${
              accordian.five ? "" : "hidden"
            }`}
          >
            Stream-Flix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("six");
            }}
          >
            <p className="text-3xl font-semibold">
              Is Stream-Flix good for Kids?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              role="img"
              data-icon="PlusLarge"
              aria-hidden="true"
              className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className={`bg-white bg-opacity-15 p-7 text-3xl font-normal ${
              accordian.six ? "" : "hidden"
            }`}
          >
            The Stream-Flix Kids experience is included in your membership to
            give parents control while kids enjoy family-friendly TV shows and
            films in their own space.
            <br />
            <br /> Kids profiles come with PIN-protected parental controls that
            let you restrict the maturity rating of content kids can watch and
            block specific titles you don’t want kids to see.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 pb-10">
        <p className="text-white text-center text-lg font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <button className="bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-md mx-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Login;
