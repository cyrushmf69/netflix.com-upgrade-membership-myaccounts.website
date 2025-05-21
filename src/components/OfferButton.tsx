
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const OfferButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="py-8 flex justify-center">
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
