import React from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hook/useMovieVideo";
import BrowseTrailer from "./BrowseTrailer";

const BrowseHome = () => {
  const movie = useSelector((store) => store.movies);
  const movieVideo = useMovieVideo(movie);
  console.log(movieVideo);

  return (
    <>
      {/* <BrowseTrailer videoUrl={movieVideo.videoUrl} /> */}
      <BrowseTrailer
        videoUrl={
          "https://www.youtube.com/embed/3pZUQmZdOi4?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&fs=0&cc_load_policy=1&iv_load_policy=3&autohide=1&showinfo=0&playlist=3pZUQmZdOi4"
        }
      />

      <div className="text-white w-[35%]  bg-gradient-to-r from-black -mt-16 h-[100vh] flex flex-col justify-center gap-3 px-4">
        {/* <p className="font-bold text-5xl">{movieVideo.id}</p> */}
        <p className="font-bold text-5xl">{movieVideo.title}</p>
        <p>{movieVideo.overview}</p>
        <button className="bg-white opacity-85 rounded-md px-2 py-1 text-black hover:opacity-50">
          Play Now
        </button>
      </div>
    </>
    // <div className="absolute -top-16 left-0 right-0  -z-20 max-w-[100vw] max-h-[100vh] overflow-hidden">
    //   <iframe
    //     className="w-full aspect-video "
    //     // width="560"
    //     // height="315"
    //     src="https://www.youtube.com/embed/LtNYaH61dXY?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=LtNYaH61dXY&iv_load_policy=3"
    //     title="YouTube video player"
    //     frameBorder="0"
    //     allow="accelerometer; autoplay;"
    //     allowFullScreen
    //   ></iframe>
    // </div>
  );
};

export default BrowseHome;
