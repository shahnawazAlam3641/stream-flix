import React, { useEffect, useRef } from "react";

const PosterContainer = ({ title, movieList }) => {
  const scrollerRef = useRef(null);

  const handleLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to handle scrolling right
  const handleRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  if (!movieList) return null;
  return (
    <div className=" transition-colors duration-500">
      <div className="flex flex-col  text-white px-2 py-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">{title}</p>
          <div className="flex gap-4">
            <button
              className="bg-[#ffffff6a] bg-red-700 text-white hover:bg-red-500 px-3 py-1 rounded-full"
              onClick={handleLeft}
            >
              {"<"}
            </button>
            <button
              className="bg-[#ffffff6a] bg-red-700 text-white hover:bg-red-500 px-3 py-1 rounded-full"
              onClick={handleRight}
            >
              {">"}
            </button>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="flex gap-4  overflow-x-scroll scrollbar-hide relative overflow-y-visible py-4"
        >
          {movieList.map((movie) => {
            return (
              <img
                className="w-36  my-auto rounded-sm hover:scale-110  hover:z-50  transition-all overflow-y-visible"
                alt="poster"
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PosterContainer;
