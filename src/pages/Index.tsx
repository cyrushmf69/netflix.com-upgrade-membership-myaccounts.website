
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import OfferButton from "@/components/OfferButton";
import { trendingNow, netflixOriginals, topRated, actionMovies } from "@/data/mockData";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-netflix-black">
      <Navbar />
      <main>
        <HeroBanner />
        <div className="relative z-10">
          <MovieRow title="Popular on Netflix" movies={trendingNow} />
          <OfferButton />
          <MovieRow title="Netflix Originals" movies={netflixOriginals} />
          <MovieRow title="Top Rated" movies={topRated} />
          <MovieRow title="Action Movies" movies={actionMovies} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
