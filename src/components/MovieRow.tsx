
import { useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  year?: string;
  rating?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
      
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
        
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      
      setTimeout(() => {
        if (rowRef.current) {
          setShowLeftArrow(rowRef.current.scrollLeft > 0);
          setShowRightArrow(
            rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10
          );
        }
      }, 500);
    }
  };

  return (
    <div className="my-8">
      <h2 className="mb-2 ml-4 text-xl font-bold text-netflix-lightgray md:ml-10">{title}</h2>
      
      <div className="group relative">
        {showLeftArrow && (
          <button
            className="absolute left-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-netflix-black/30 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => handleScroll("left")}
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>
        )}
        
        <div 
          ref={rowRef}
          className="flex gap-2 overflow-x-scroll px-4 pb-8 scrollbar-hide md:px-10"
          onScroll={() => {
            if (rowRef.current) {
              setShowLeftArrow(rowRef.current.scrollLeft > 0);
              setShowRightArrow(
                rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10
              );
            }
          }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
        
        {showRightArrow && (
          <button
            className="absolute right-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-netflix-black/30 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => handleScroll("right")}
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
