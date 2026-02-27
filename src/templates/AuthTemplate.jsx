
import Bubble from "../components/atoms/Bubble";

export default function AuthTemplate({ children }) {
  return (

    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#9b8ed2] via-[#FCE7F3] to-[#eba7ab] px-4 sm:px-6 lg:px-8">

      {/* Floating Blob 1 */}
      <Bubble


        size="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
        position="top-10 left-4 sm:top-16 sm:left-8 lg:top-20 lg:left-20"
        color="bg-pink-200/40"
        duration={6}
      />

      <Bubble


        size="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60"
        position="bottom-10 right-4 sm:bottom-16 sm:right-8 lg:bottom-20 lg:right-10"
        color="bg-purple-200/40"
        duration={8}
      />

      <Bubble


        size="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
        position="top-1/2 left-1/4 sm:left-1/3"
        color="bg-rose-200/40"
        duration={7}
      />

      {/* Card */}

      <div className="relative backdrop-blur-xl bg-white/30 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg border border-white/10">
        {children}
      </div>
    </div>
  );
}