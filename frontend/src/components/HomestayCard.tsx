import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface HomestayCardProps {
  id?: string;
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
}

const HomestayCard = ({ id = "1", image, title, location, rating, reviews, price }: HomestayCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/homestay/${id}`);
  };

  return (
    <Card 
      onClick={handleClick}
      className="glass-strong overflow-hidden rounded-2xl border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-fade-in"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-white">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        
        <div className="flex items-center gap-1 text-white/80 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-white/70">
            {reviews} reviews
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-white/90">${price}</span>
            <span className="text-sm text-white/70"> / night</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HomestayCard;
