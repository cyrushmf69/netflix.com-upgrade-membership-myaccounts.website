
import { useState } from 'react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  year?: string;
  rating?: string;
}

const MovieCard = ({ title, imageUrl, year, rating }: MovieCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="movie-card aspect-[2/3] min-w-[160px] cursor-pointer"
      style={{ width: 'calc(20% - 8px)' }}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`h-full w-full rounded-md object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="movie-card-overlay">
        <div className="w-full">
          <h3 className="mb-1 text-sm font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2 text-xs">
            {rating && <span className="text-green-500">{rating} Match</span>}
            {year && <span className="text-netflix-lightgray">{year}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
