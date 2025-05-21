
import Navbar from "@/components/Navbar";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import { netflixOriginals, topRated } from "@/data/mockData";

const TVShows = () => {
  return (
    <div className="relative min-h-screen bg-netflix-black">
      <Navbar />
      <main>
        <div className="h-32 md:h-36" />
        <div className="px-4 md:px-10">
          <h1 className="mb-4 text-3xl font-bold text-white">TV Shows</h1>
          <div className="mb-8 border-b border-netflix-gray pb-4">
            <div className="flex gap-4 overflow-x-auto overflow-y-hidden">
              {["Genres", "Documentaries", "Comedy", "Drama", "Thriller", "Action", "Crime", "Sci-Fi", "Fantasy"].map((genre) => (
                <button
                  key={genre}
                  className="whitespace-nowrap rounded-full border border-netflix-gray px-4 py-1 text-sm text-netflix-gray hover:border-white hover:text-white"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <MovieRow title="Netflix Original Series" movies={netflixOriginals} />
        <MovieRow title="Top Rated TV Shows" movies={topRated} />
      </main>
      <Footer />
    </div>
  );
};

export default TVShows;
