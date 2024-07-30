import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constatnts";

const useMovieVideo = (movie) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);

  // console.log(movie);

  useEffect(() => {
    if (!movie.nowPlayingMovies) return;

    const index = Math.floor(Math.random() * 10);
    const selectedMovie = movie.nowPlayingMovies[index];
    setMovieInfo(selectedMovie);

    const getVideo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos`,
          API_OPTIONS
        );
        const data = await response.json();
        const trailers = data.results.filter(
          (video) => video.type === "Trailer"
        );

        if (trailers.length > 0) {
          // setVideoUrl(`https://www.youtube.com/embed?v=${trailers[0].key}`);
          setVideoUrl(
            `https://www.youtube.com/embed/${trailers[0].key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&fs=0&cc_load_policy=1&iv_load_policy=3&autohide=1&showinfo=0&playlist=${trailers[0].key}`
          );
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    getVideo();
  }, [movie]);

  return movieInfo
    ? {
        id: movieInfo.id,
        title: movieInfo.title,
        overview: movieInfo.overview,
        videoUrl: videoUrl,
      }
    : { id: null, title: "", overview: "", videoUrl: "" };

  // useEffect(() => {
  //   const index = Math.floor(Math.random() * 10);

  //   if (!movie.nowPlayingMovies) {
  //     return;
  //   }
  //   const selectedMovie = movie.nowPlayingMovies[index];
  //   console.log(selectedMovie);
  //   setMovieInfo(selectedMovie);
  //   console.log("movie info done", movieInfo);
  //   //   console.log(movieInfo);

  //   const getVideo = async () => {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/movie/" + movieInfo.id + "/videos",
  //       API_OPTIONS
  //     );
  //     const data = await response.json();
  //     // console.log(data.results);

  //     const trailers = data.results.filter((video) => {
  //       return video.type === "Trailer";
  //     });

  //     console.log(trailers);
  //     setVideoUrl("https://www.youtube.com/watch?v=" + trailers[0].key);
  //   };
  //   getVideo();
  // }, [movie]);

  // return movieInfo
  //   ? {
  //       id: movieInfo.id,
  //       title: movieInfo.title,
  //       overview: movieInfo.overview,
  //       videoUrl: videoUrl,
  //     }
  //   : {
  //       id: "",
  //       title: "",
  //       overview: "",
  //       videoUrl: "",
  //     };
};

export default useMovieVideo;
