import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import streamflixLogo from "../assets/Stream-flix.png";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        // ...
      }
    });
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
    <div className="flex justify-between">
      <div className="w-full flex justify-between">
        <img src={streamflixLogo} alt="logo" className="w-60 mx-20 my-5" />
        {user && (
          <button
            className="p-4 bg-red-600 rounded-lg text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
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
