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
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-700 text-center mb-6 sm:mb-8 px-2"
        >
        Celebrating Her Impact 💜
      </motion.h1>
      <LoginForm />
    </AuthTemplate>
  );
}
