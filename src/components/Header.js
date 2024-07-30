import React, { useEffect } from "react";
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

const Header = () => {
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
    <div className="flex justify-between py-2 sticky">
      <img src={streamflixLogo} alt="logo" className="w-44 " />
      {user && (
        <>
          <div className="flex bg-red-600 gap-10 px-5 rounded-full">
            <img src={magnifyingGlass} alt="search" className="w-6 " />
            <img src={homeIcon} alt="home" className="w-6 " />
            <img src={trendingIcon} alt="trending" className="w-6 " />
            <img src={watchlistIcon} alt="watchlist" className="w-6 " />
          </div>
          <div className="flex items-center gap-4 w-44 justify-center">
            <img src={userIcon} alt="user" className="w-6 " />
            <div
              className="flex justify-center cursor-pointer text-white"
              onClick={handleSignOut}
            >
              <p className="font-semibold ">John </p>
              <span className=" rotate-[90deg] font-bold px-2"> {">"}</span>
            </div>
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
