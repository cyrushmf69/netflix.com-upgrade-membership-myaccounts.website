
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div className="relative h-[85vh] min-h-[500px] w-full">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-5">
          Unlimited movies, TV shows, and more
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-5">
          Starts at AED 35. Cancel anytime.
        </p>
        
        <p className="text-lg md:text-xl text-white mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xl">
          <Input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 bg-black/40 border border-gray-600 text-white placeholder:text-gray-400 text-base"
          />
          <Button 
            className="h-14 bg-netflix-red hover:bg-netflix-red/90 text-white px-8 font-semibold text-2xl"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
