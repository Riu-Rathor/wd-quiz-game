import { useState, useMemo } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import GenderOption from "../atoms/GenderOption.jsx.jsx";
import FormField from "../molecules/FormField";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  // Simple email validation
  const isEmailValid = useMemo(() => {
    return /\S+@\S+\.\S+/.test(email);
  }, [email]);

  // Check if form is valid
  const isFormValid = name.trim() !== "" && isEmailValid && gender !== "";

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isFormValid) return;

  setFormError("");

  try {
    setLoading(true);

    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email, gender }]);
      console.log("Supabase response:", { data, error });

    if (error) {
      // 🔥 Check if duplicate email error
      if (error.code === "23505") {
        setFormError("You have already submitted the form 💖");
      } else {
        setFormError("Something went wrong. Please try again.");
      }
      return;
    }

    // ✅ Success case
    console.log("Inserted successfully");

  } catch (err) {
    console.error(err);
    setFormError("Unexpected error occurred.");
  } finally {
    setLoading(false);
  }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Name */}
      <FormField>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>

      {/* Email */}
      <FormField>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

      {/* Gender */}
      <FormField>
        <div className="flex gap-3 w-full">
          <GenderOption
            type="female"
            selected={gender === "female"}
            onClick={() => setGender("female")}
          />
          <GenderOption
            type="male"
            selected={gender === "male"}
            onClick={() => setGender("male")}
          />
        </div>
      </FormField>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!isFormValid || loading}
        className={`w-full transition-all duration-300 ${
          !isFormValid
            ? "opacity-40 grayscale cursor-not-allowed"
            : "hover:scale-105 active:scale-95"
        }`}
      >
        {loading ? "Starting Journey..." : "Begin the Journey"}
      </Button>

      {/* 🌸 Beautiful Error Message */}
      {formError && (
        <div className="relative overflow-hidden rounded-2xl mt-4 animate-fadeSlide">
          
          {/* soft glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 blur-xl opacity-60"></div>

          {/* content */}
          <div className="relative bg-white/70 backdrop-blur-md border border-pink-200 text-pink-700 px-5 py-3 rounded-2xl shadow-md text-center font-medium">
            {formError}
          </div>
        </div>
      )}
    </form>
  );
}