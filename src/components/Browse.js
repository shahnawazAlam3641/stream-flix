import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import BrowseHome from "./BrowseHome";
import useTopRatedMovies from "../hook/useTopRatedMovies";
import usePopularMovies from "../hook/usePopularMovies";
import useUpcomingMovies from "../hook/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div className="overflow-x-hidden bg-black">
      {/* <Header /> */}

      <BrowseHome />
    </div>
  );
};

export default Browse;
