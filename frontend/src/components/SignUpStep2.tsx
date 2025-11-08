import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";

interface SignUpStep2Props {
  fullName: string;
}

const SignUpStep2 = ({ fullName }: SignUpStep2Props) => {
  const navigate = useNavigate();

  return (
    <div className="glass rounded-3xl p-8 md:p-12 max-w-2xl w-full animate-scale-in">
      {/* Logo and Title */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <img 
            src={Logo} 
            alt="StayHub logo" 
            className="h-16 w-16 object-contain cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate('/')}
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Success!
        </h1>
        <p className="text-white/80">Your account has been created successfully</p>
      </div>

      <div className="space-y-6 max-w-md mx-auto text-center">
        <p className="text-white/90 text-lg">
          Welcome to StayHub, {fullName}! You're all set to start exploring amazing homestays.
        </p>
        
        <div className="flex justify-center pt-2">
          <Button
            onClick={() => navigate('/')}
            className="rounded-xl h-12 px-12 text-base font-medium bg-black text-white hover:bg-muted-foreground/40"
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpStep2;
