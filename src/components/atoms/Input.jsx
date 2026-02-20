export default function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
  );
}
