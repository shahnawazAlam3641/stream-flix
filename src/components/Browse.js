import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import BrowseHome from "./BrowseHome";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />

      <BrowseHome />
    </div>
  );
};

export default Browse;
