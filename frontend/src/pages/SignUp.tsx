import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import signupBackground from "@/assets/image/background/siginup-background.jpg";
import SignUpStep1 from "@/components/SignUpStep1";
import SignUpStep2 from "@/components/SignUpStep2";
import { registerUser, RegisterUserData, RegisterResponse } from "@/services/api";

const SignUp = () => {
  const [step, setStep] = useState(1); // 1: email/name/password, 2: success
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const mutation = useMutation<RegisterResponse, any, RegisterUserData>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast({ title: "Success", description: data.message });
      setStep(2);
    },
    onError: (err: any) => {
      // If server returns a message, show it in toast and map to form errors if applicable
      const message = err?.response?.data?.message || err?.message || "Registration failed";
      toast({ title: "Error", description: String(message) });
      if (message === 'Email already exists') {
        setErrors((prev) => ({ ...prev, email: 'Email already exists' }));
      }
    },
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    };

    // Validate empty fields
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Set errors
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    // Call registration API
    mutation.mutate({ email, password, fullName });
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log("Sign up with Google");
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Sign Up Section */}
      <section
        className="relative h-screen flex items-center justify-center px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${signupBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Step 1: Email, Full Name, and Password */}
        {step === 1 && (
          <SignUpStep1
            email={email}
            fullName={fullName}
            password={password}
            confirmPassword={confirmPassword}
            errors={errors}
            onEmailChange={setEmail}
            onFullNameChange={setFullName}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onSubmit={handleStep1Submit}
            isLoading={mutation.isPending}
            onGoogleSignUp={handleGoogleSignUp}
          />
        )}

        {/* Step 2: Success */}
        {step === 2 && <SignUpStep2 fullName={fullName} />}
      </section>
    </div>
  );
};

export default SignUp;
