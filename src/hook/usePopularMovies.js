import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatnts";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
    // console.log(data);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
