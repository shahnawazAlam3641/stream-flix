import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hook/useMovieVideo";

const BrowseTrailer = ({ videoUrl }) => {
  const movie = useSelector((store) => store.movies);
  const movieVideo = useMovieVideo(movie);
  console.log(videoUrl);
  return (
    // <div className="absolute -top-16 left-0 right-0  -z-20 max-w-[100vw] max-h-[100vh] overflow-hidden">
    <div className="absolute top-0 right-0 left-0 bottom-0 scale-[1.4] -z-20 overflow-hidden">
      <iframe
        className="w-full aspect-video overflow-hidden"
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
