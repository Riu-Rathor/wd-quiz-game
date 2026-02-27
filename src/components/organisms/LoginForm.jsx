import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import GenderOption from "../atoms/GenderOption.jsx.jsx";
import FormField from "../molecules/FormField";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (gender === "female") {
        navigate("/female");
    } else if (gender === "male") {
        navigate("/male");
    }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <FormField>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>

      <FormField>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

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

      <Button type="submit">Begin the Journey</Button>
    </form>
  );
}
