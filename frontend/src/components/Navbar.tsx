import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass rounded-none">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => navigate('/')}
          >
            <img src={Logo} alt="StayHub logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-semibold text-white">StayHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-primary transition-colors">
              Home
            </a>
            <a href="#homestays" className="text-white hover:text-primary transition-colors">
              Homestays
            </a>
            <a href="#reviews" className="text-white hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Button 
              onClick={() => navigate('/signin')}
              className="rounded-full bg-background/90 text-foreground hover:bg-background"
            >
              Sign In
            </Button>

            <Button 
              onClick={() => navigate('/signup')}
              className="rounded-full bg-transparent text-white border hover:bg-transparent"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-transparent hover:bg-transparent transition-colors text-white"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in bg-glass-strong">
            <a href="#" className="block text-white hover:text-primary transition-colors">
              Home
            </a>
            <a href="#homestays" className="block text-white hover:text-primary transition-colors">
              Homestays
            </a>
            <a href="#reviews" className="block text-white hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="block text-white hover:text-primary transition-colors">
              Contact
            </a>
            <Button 
              onClick={() => navigate('/signin')}
              className="w-full rounded-full bg-background/90 text-foreground hover:bg-background"
            >
              Sign In
            </Button>

            <Button 
              onClick={() => navigate('/signup')}
              className="w-full rounded-full bg-transparent text-white border hover:bg-transparent"
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
