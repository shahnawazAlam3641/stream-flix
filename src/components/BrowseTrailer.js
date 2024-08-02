import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hook/useMovieVideo";

const BrowseTrailer = ({ videoUrl, isScroll }) => {
  const movie = useSelector((store) => store.movies);
  const movieVideo = useMovieVideo(movie);
  // console.log(videoUrl);

  return (
    // <div className="absolute -top-16 left-0 right-0  -z-20 max-w-[100vw] max-h-[100vh] overflow-hidden">
    <div className=" -m-48  sm:h-[120vh]  -z-20 overflow-y-hidden">
      <iframe
        className={`w-full h-full aspect-video overflow-x-hidden fixed left-[50%] -translate-x-1/2  -top-52 scale-[1.35] opacity-${isScroll} transition-all duration-300`}
        style={{ opacity: isScroll / 100 }}
        // width="560"
        // height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BrowseTrailer;
