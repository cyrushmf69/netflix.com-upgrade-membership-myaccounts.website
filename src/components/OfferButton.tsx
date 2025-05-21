
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const OfferButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="py-12 flex flex-col items-center text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Get your exclusive offer today!
      </h2>
      <p className="text-lg text-netflix-lightgray mb-6 max-w-2xl">
        Sign in to access special promotions and deals available for a limited time.
      </p>
      <Button 
        onClick={handleClick}
        className="bg-netflix-red hover:bg-netflix-red/90 text-white font-bold py-3 px-8 rounded text-lg"
      >
        Click Here to Get Your Offer
      </Button>
    </div>
  );
};

export default OfferButton;
