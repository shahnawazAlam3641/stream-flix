import React, { useRef, useState } from "react";
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
import { validateForm } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";

const Login = () => {
  const [accordian, setAccordian] = useState({});
  const [errMeaasage, setErrMessage] = useState(null);
  const [signInPage, setSignInPage] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dummyCred = () => {
    setSignInPage(true);
    setEmailInput("john@gmail.com");
    setPasswordInput("John1234");
  };

  const handleAccordian = (number) => {
    console.log("accordian clicked");
    setAccordian((oldState) => {
      const newState = {};
      newState[number] = !oldState[number];
      return newState;
    });
  };

  const handleSubmit = () => {
    const message = validateForm(
      // name.current.value,
      email.current.value,
      password.current.value
    );

    setErrMessage(message);

    if (message) return;

    if (!signInPage) {
      //signUp

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //update
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://i.pinimg.com/564x/73/c3/50/73c35097071e55014cffc83b72f85ea3.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } else {
      //SignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ": " + errorMessage);
        });
    }

    // console.log(message);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div className="flex flex-col bg-black items-center scroll-smooth">
      <div
        id="login"
        className="w-[100vw] h-[100vh] flex flex-col items-center bg-no-repeat"
        style={{ backgroundImage: `url(${streamflixBG})` }}
      >
        {/* <div className="w-full">
          <img src={streamflixLogo} alt="logo" className="w-60 mx-20 my-5" />
        </div> */}
        <Header />

        <div className="flex flex-col items-center w-[450px] bg-opacity-75 bg-black max-w-[90%] rounded-sm">
          <h1 className="text-white font-bold text-4xl p-8">Sign In</h1>
          <form
            className="flex flex-col gap-2 w-full items-center"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {!signInPage && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
              />
            )}
            <input
              value={emailInput}
              ref={email}
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            <input
              value={passwordInput}
              ref={password}
              type="password"
              placeholder="Password"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
            />
            {/* <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-3 text-white rounded-md w-[75%] bg-opacity-20 bg-gray-800 border-solid border-gray-900 border-[1px]"
            /> */}
            <p className="text-red-500">{errMeaasage}</p>
            <button
              className="bg-red-600 w-[75%] py-2 rounded-md text-white"
              onClick={() => {
                handleSubmit();
                // console.log(name.current.value);
                console.log(email.current.value);
                console.log(password.current.value);
              }}
            >
              Sign In
            </button>
            <div className="w-[75%] pt-8">
              <p
                className="text-white cursor-pointer"
                onClick={() => {
                  setSignInPage(!signInPage);
                }}
              >
                <span className="text-gray-500">
                  {signInPage ? "New to Stream-Flix?" : "Already a User?"}
                </span>
                {signInPage ? " Sign Up Now" : " Sign In Now"}
              </p>
              <p
                className="text-white cursor-pointer pt-2 pb-6"
                onClick={dummyCred}
              >
                Use Dummy Credential
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="h-2 bg-gray-700 w-full"></div>

      {/* EXTRAS */}

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

      {/* FAQ */}

      <div className="text-white py-20 px-4 flex flex-col w-full max-w-[1030px] items-center gap-2 transition-all">
        <h1 className="text-2xl font-extrabold text-center pb-6 leading-none lg:text-[3rem]">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-[1px] w-full ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between "
            onClick={() => {
              handleAccordian("one");
            }}
          >
            <p className="text-xl font-semibold sm:text-2xl w-[75%]">
              What is Stream-Flix?
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
              className={`${accordian.one ? "rotate-45" : ""} transition-all`}
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
            className={`bg-white bg-opacity-15  text-xl font-normal overflow-hidden transition-all ${
              accordian.one ? "p-7" : "max-h-0 "
            }`}
          >
            Stream-Flix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br />
            <br /> You can watch as much as you want, whenever you want, without
            a single ad – all for one low monthly price. There's always
            something new to discover, and new TV shows and movies are added
            every week!
          </div>
        </div>

        <div className="flex flex-col gap-[1px] w-full">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("two");
            }}
          >
            <p className="text-xl font-semibold sm:text-2xl w-[75%]">
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
              className={`${accordian.two ? "rotate-45" : ""} transition-all`}
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
            className={`bg-white bg-opacity-15  text-xl font-normal overflow-hidden transition-all ${
              accordian.two ? "p-7" : "max-h-0 "
            }`}
          >
            Watch Stream-Flix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            ₹149 to ₹649 a month. No extra costs, no contracts.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] w-full">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("three");
            }}
          >
            <p className="text-xl font-semibold sm:text-2xl w-[75%]">
              Where can I Watch?
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
              className={`${accordian.three ? "rotate-45" : ""} transition-all`}
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
            className={`bg-white bg-opacity-15  text-xl font-normal overflow-hidden transition-all ${
              accordian.three ? "p-7" : "max-h-0 "
            }`}
          >
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web from your personal computer or on any
            internet-connected device, including smart TVs, smartphones,
            tablets, streaming media players and game consoles.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] w-full">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("four");
            }}
          >
            <p className="text-xl font-semibold sm:text-2xl w-[75%]">
              How do I cancel?
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
              className={`${accordian.four ? "rotate-45" : ""} transition-all`}
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
            className={`bg-white bg-opacity-15  text-xl font-normal overflow-hidden transition-all ${
              accordian.four ? "p-7" : "max-h-0 "
            }`}
          >
            Stream-Flix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] w-full">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("five");
            }}
          >
            <p className="text-xl font-semibold sm:text-2xl w-[75%]">
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
              className={`${accordian.five ? "rotate-45" : ""} transition-all`}
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
            className={`bg-white bg-opacity-15  text-xl font-normal overflow-hidden transition-all ${
              accordian.five ? "p-7" : "max-h-0 "
            }`}
          >
            Stream-Flix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        </div>

        <div className="flex flex-col gap-[1px] w-full ">
          <div
            className="bg-white bg-opacity-15 p-8 flex justify-between"
            onClick={() => {
              handleAccordian("six");
            }}
          >
            <p className="text-xl font-semibold sm:text-2xl w-[75%]">
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
              className={`${accordian.six ? "rotate-45" : ""} transition-all`}
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
            className={`bg-white bg-opacity-15  text-xl font-normal overflow-hidden transition-all ${
              accordian.six ? "p-7" : "max-h-0 "
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

      {/* GET STARTED */}

      <div className="flex flex-col items-center gap-6 pb-10">
        <p className="text-white text-center text-lg font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <a
          href="#login"
          className="bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-md mx-auto "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Login;
