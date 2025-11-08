import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  initials: string;
  rating: number;
  review: string;
  date: string;
}

const ReviewCard = ({ name, initials, rating, review, date }: ReviewCardProps) => {
  return (
    <Card className="glass-strong rounded-2xl border-0 p-6 animate-fade-in">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h4 className="text-background font-semibold mb-1">{name}</h4>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-background/50">{date}</span>
          </div>
        </div>

        <Quote className="h-8 w-8 text-accent opacity-50" />
      </div>

      <p className="text-background/70 leading-relaxed">{review}</p>
    </Card>
  );
};

export default ReviewCard;
