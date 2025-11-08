import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import heroBackground from "@/assets/image/background/signin-background.jpg";
import Logo from "@/assets/logo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      email: "",
      password: "",
    };

    // Validate empty fields
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Set errors
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    // Mock sign in success
    toast({
      title: "Success",
      description: "You have successfully signed in!",
    });

    // Redirect to homepage after a short delay
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log("Sign in with Google");
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Sign In Section */}
      <section
        className="relative h-screen flex items-center justify-center px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
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
              Welcome Back
            </h1>
            <p className="text-white/80">Sign in to continue your journey</p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-muted-foreground"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </label>
              <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-foreground flex-1"
                  data-form-type="other"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-foreground hover:text-primary transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="rounded-xl h-12 w-full text-base font-medium bg-black text-white hover:bg-black/80"
              >
                Sign In
              </Button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-5 text-sm text-white/80 max-w-md mx-auto">
            Don't have an account?{" "}
            <a href="/signup" className="text-white font-medium hover:text-primary transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
