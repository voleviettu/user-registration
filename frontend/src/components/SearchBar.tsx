import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="glass rounded-3xl md:rounded-full p-6 max-w-5xl w-full animate-scale-in">
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* Location */}
        <div className="flex items-center gap-3 bg-background/50 rounded-full px-6 py-3 flex-1">
          <MapPin className="h-5 w-5" />
          <Input
            type="text"
            placeholder="Where to?"
            className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-foreground"
          />
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-3 bg-background/50 rounded-full px-6 py-3 flex-1">
          <Calendar className="h-5 w-5" />
          <Input
            type="date"
            placeholder="Check-in"
            className="border-0 bg-transparent p-0 focus-visible:ring-0"
          />
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-3 bg-background/50 rounded-full px-6 py-3 flex-1">
          <Calendar className="h-5 w-5" />
          <Input
            type="date"
            placeholder="Check-out"
            className="border-0 bg-transparent p-0 focus-visible:ring-0"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 bg-background/50 rounded-full px-6 py-3 flex-1">
          <Users className="h-5 w-5" />
          <Input
            type="number"
            min="1"
            placeholder="Guests"
            className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-foreground"
          />
        </div>

        {/* Search Button */}
        <Button className="rounded-full h-auto px-6 text-base font-medium whitespace-nowrap bg-background/50 text-foreground hover:bg-background/70">
          <Search className=" h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
