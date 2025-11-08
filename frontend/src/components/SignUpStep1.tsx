import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

interface SignUpStep1Props {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  errors: {
    email: string;
    fullName: string;
    password: string;
    confirmPassword: string;
  };
  onEmailChange: (value: string) => void;
  onFullNameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
  onGoogleSignUp: () => void;
}

const SignUpStep1 = ({
  email,
  fullName,
  password,
  confirmPassword,
  errors,
  onEmailChange,
  onFullNameChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
  onGoogleSignUp,
  isLoading = false,
}: SignUpStep1Props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          Create Account
        </h1>
        <p className="text-white/80">Join us and start your journey</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
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
              onChange={(e) => onEmailChange(e.target.value)}
              className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-muted-foreground"
              required
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Full Name Field */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="text-sm font-medium text-white">
            Full Name
          </label>
          <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => onFullNameChange(e.target.value)}
              className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-foreground"
              required
            />
          </div>
          {errors.fullName && (
            <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
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
              onChange={(e) => onPasswordChange(e.target.value)}
              className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-foreground flex-1"
              data-form-type="other"
              autoComplete="new-password"
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

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-white">
            Confirm Password
          </label>
          <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => onConfirmPasswordChange(e.target.value)}
              className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-foreground flex-1"
              data-form-type="other"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-foreground hover:text-primary transition-colors p-1"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Create Account Button */}
        <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="rounded-xl h-12 w-full text-base font-medium bg-black text-white hover:bg-black/80"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Account'}
            </Button>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-5 text-sm text-white/80">
          Already have an account?{" "}
          <Link to="/signin" className="text-white font-medium hover:text-primary transition-colors">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpStep1;
