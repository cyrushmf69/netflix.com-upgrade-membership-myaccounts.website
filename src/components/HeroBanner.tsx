
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative h-[56.25vw] min-h-[400px] max-h-[700px] w-full">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-netflix-black to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-netflix-black/30" />

      {/* Content */}
      <div className="absolute bottom-1/4 left-0 w-full px-4 md:bottom-1/3 md:px-10 lg:px-16">
        <div className="max-w-xl">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">Stranger Code</h1>
          
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-xs text-netflix-lightgray">2023</span>
            <span className="text-xs text-netflix-lightgray">•</span>
            <span className="rounded border border-netflix-gray px-1 text-[10px] text-netflix-lightgray">TV-MA</span>
            <span className="text-xs text-netflix-lightgray">•</span>
            <span className="text-xs text-netflix-lightgray">4 Seasons</span>
            <span className="text-xs text-netflix-lightgray">•</span>
            <span className="text-xs text-netflix-lightgray">Sci-Fi</span>
          </div>
          
          <p className="mb-6 text-sm text-netflix-lightgray md:text-base">
            When a young developer discovers a mysterious codebase, strange bugs begin to appear in their town. Together with their friends, they must solve the digital mysteries and face the dangers from the upside-down web.
          </p>
          
          <div className="flex space-x-3">
            <Button className="flex items-center gap-2 bg-white px-6 py-2 font-bold text-black hover:bg-white/80">
              <Play className="h-5 w-5 fill-black" />
              Play
            </Button>
            <Button variant="outline" className="border-gray-400 bg-gray-800/40 px-6 py-2 text-white hover:bg-gray-800/60">
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
