import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import streamflixLogo from "../assets/Stream-flix.png";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import magnifyingGlass from "../assets/magnifying-glass-solid.svg";
import homeIcon from "../assets/house-solid.svg";
import trendingIcon from "../assets/arrow-up-right-dots-solid.svg";
import watchlistIcon from "../assets/heart-regular.svg";
import userIcon from "../assets/user-solid.svg";
import bars from "../assets/bars-solid.svg";
import xmark from "../assets/xmark-solid.svg";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="flex  justify-between   relative z-50">
      <img
        src={streamflixLogo}
        alt="logo"
        className="w-20 h-6 sm:w-44 sm:h-12 "
      />
      {user && (
        <>
          <div className=" bg-red-600 gap-5 my-2  rounded-full hidden sm:flex ">
            <img
              src={magnifyingGlass}
              alt="search"
              className="w-6 m-4  opacity-55 hover:opacity-100 cursor-pointer "
              title="Search"
            />
            <img
              src={homeIcon}
              alt="home"
              className="w-6 m-4 opacity-100 hover:opacity-100 cursor-pointer "
              title="Home"
            />
            <img
              src={trendingIcon}
              alt="trending"
              className="w-6 m-4 opacity-55 hover:opacity-100 cursor-pointer "
              title="Trending"
            />
            <img
              src={watchlistIcon}
              alt="watchlist"
              className="w-6 m-4 opacity-55 hover:opacity-100  cursor-pointer "
              title="WatchList"
            />
          </div>
          <div className=" items-center gap-4 w-44 justify-center hidden sm:flex">
            <img src={userIcon} alt="user" className="w-6 " />
            <div
              className="flex justify-center cursor-pointer text-white"
              onClick={handleSignOut}
            >
              <p className="font-semibold ">John </p>
              <span className=" rotate-[90deg] font-bold px-2"> {">"}</span>
            </div>
          </div>
          <img
            src={bars}
            alt="icon"
            className={`w-4 mx-2 cursor-pointer ${
              isMenu ? "hidden" : "block"
            }  sm:hidden`}
            onClick={() => {
              setIsMenu(true);
            }}
          ></img>
          <div
            className={`bg-black text-red-500 h-screen flex flex-col items-center transition-all gap-6 font-semibold px-5 pt-10  ${
              isMenu ? "flex" : "hidden"
            } sm:hidden `}
          >
            <img
              src={xmark}
              alt="close"
              className="w-4 absolute top-2 right-3 cursor-pointer  "
              onClick={() => {
                setIsMenu(false);
              }}
            />
            <p>Search</p>
            <p className="text-white">Home</p>
            <p>Trending</p>
            <p>Watch List</p>
            <button
              className="text-white bg-red-600 py-1 px-2 rounded-sm"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </div>
        </>
      )}

      {/* <div className="w-full flex justify-between">
        <img src={streamflixLogo} alt="logo" className="w-60 mx-20 my-5" />
        {user && (
          <button
            className="p-4 bg-red-600 rounded-lg text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div> */}
      {/* <p className="text-red-500 p-4 font-extrabold text-5xl">Netflix</p>
      <button
        className="p-4 bg-red-600 rounded-lg text-white"
        onClick={handleSignOut}
      >
        Sign Out
      </button> */}
    </div>
  );
};

export default Header;
