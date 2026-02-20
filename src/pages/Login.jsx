import LoginForm from "../components/organisms/LoginForm";
import AuthTemplate from "../templates/AuthTemplate";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <AuthTemplate>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-purple-700 text-center mb-8"
        >
        Celebrating Her Impact 💜
      </motion.h1>
      <LoginForm />
    </AuthTemplate>
  );
}
