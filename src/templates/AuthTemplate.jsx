
import Bubble from "../components/atoms/Bubble";

export default function AuthTemplate({ children }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#9b8ed2] via-[#FCE7F3] to-[#eba7ab] px-4">

      {/* Floating Blob 1 */}
      <Bubble
        size="w-40 h-40"
        position="top-20 left-20"
        color="bg-pink-200/40"
        duration={6}
      />

      <Bubble
        size="w-60 h-60"
        position="bottom-20 right-10"
        color="bg-purple-200/40"
        duration={8}
      />

      <Bubble
        size="w-32 h-32"
        position="top-1/2 left-1/3"
        color="bg-rose-200/40"
        duration={7}
      />

      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/30 p-10 rounded-3xl shadow-xl w-full max-w-md border border-white/10">
        {children}
      </div>
    </div>
  );
}