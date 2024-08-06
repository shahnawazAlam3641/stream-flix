import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieVideo from "../hook/useMovieVideo";
import BrowseTrailer from "./BrowseTrailer";
import Header from "./Header";
import PosterContainer from "./PosterContainer";
import useTruncate from "../hook/useTruncate";

const BrowseHome = () => {
  const movie = useSelector((store) => store.movies);
  const movieVideo = useMovieVideo(movie);

  const [isScroll, setIsScroll] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scroller = document.getElementById("scroller");
      if (scroller.scrollTop > 350) {
        setIsScroll(0); // reduce opacity
        console.log(350, isScroll);
      } else if (scroller.scrollTop > 200) {
        setIsScroll(50); // reduce opacity
        console.log(200, isScroll);
      } else {
        setIsScroll(100); // reset opacity
      }
    };

    const scroller = document.getElementById("scroller");
    if (scroller) {
      scroller.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    console.log(isScroll);
  }, [isScroll]);

  // console.log(movieVideo);

  return (
    <div
      className="w-[100vw] h-[100vh] relative overflow-x-hidden "
      id="scroller"
      // onScroll={() => {
      //   console.log(isScroll);
      //   setIsScroll(1);
      //   console.log(isScroll);
      //   console.log("scrolling");
      // }}
    >
      <Header />
      <BrowseTrailer isScroll={isScroll} videoUrl={movieVideo.videoUrl} />
      {/* <BrowseTrailer
        videoUrl={
          "https://www.youtube.com/embed/LtNYaH61dXY?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&fs=0&cc_load_policy=1&iv_load_policy=3&autohide=1&showinfo=0&playlist=LtNYaH61dXY"
        }
      /> */}

      <div className="absolute top-32 sm:-top-40 lg:top-16 text-white  flex flex-col  gap-3  ">
        {/* <p className="font-bold text-5xl">{movieVideo.id}</p> */}
        <div className="w-[65%]  bg-gradient-to-r from-black -mt-72 h-[85vh] sm:h-[100vh] flex flex-col justify-center gap-2 px-4 sm:-mt-20">
          <p className="font-bold text-xl  sm:text-5xl">
            {useTruncate(movieVideo.title, 3)}
          </p>
          <p className="text-sm sm:text-xl">
            {useTruncate(movieVideo.overview, 12)}
          </p>
          <button className="bg-white opacity-90 rounded-md text-xs sm:text-xl text-black hover:opacity-50 w-24 sm:w-36 sm:px-2 py-2">
            More Info.
          </button>
        </div>

        <div
          className={`flex flex-col -mt-48 sm:-mt-64 lg:-mt-36  transition-all duration-500`}
        >
          <PosterContainer
            title={"Now Playing Movies"}
            movieList={movie.nowPlayingMovies}
          />

          <PosterContainer
            title={"Upcoming Movies"}
            movieList={movie.upcomingMovies}
          />
          <PosterContainer
            title={"Popular Movies"}
            movieList={movie.popularMovies}
          />

          <PosterContainer
            title={"Top Rated Movies"}
            movieList={movie.topRatedMovies}
          />
        </div>
      </div>
    </div>
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
