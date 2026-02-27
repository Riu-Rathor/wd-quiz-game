export const TextInput = ({ value, onChange, placeholder, rows = 6 }) => {
  return (
    <div className="relative w-full flex flex-col items-center mt-6 sm:mt-8 px-2">
      {/* Pin SVG */}
      <div className="absolute -top-6 z-10">
        <svg className="w-10 h-10 text-red-400 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="7" r="4" fill="#e75480" stroke="#b91c1c" strokeWidth="1.5" />
          <rect x="11" y="11" width="2" height="8" rx="1" fill="#b91c1c" />
        </svg>
      </div>
      {/* Notepad paper effect */}
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg p-4 sm:p-6 pt-8 sm:pt-10 bg-pink-50 rounded-2xl shadow-2xl border border-pink-200" style={{
        background: 'repeating-linear-gradient(180deg, #fff5fa, #fff5fa 24px, #f0d4e6 25px, #f0d4e6 26px)',
        boxShadow: '0 8px 32px 0 rgba(255, 105, 180, 0.15)',
        borderRadius: '1.5rem',
        border: '2px solid #f0d4e6',
        position: 'relative',
      }}>
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full bg-transparent px-3 sm:px-4 py-2 sm:py-3 rounded-xl outline-none transition resize-none text-pink-400 placeholder:text-pink-400 font-medium text-base sm:text-lg"
          style={{
            minHeight: '120px',
            letterSpacing: '0.03em',
            border: 'none',
            outline: 'none',
            background: 'transparent',
          }}
        />
        {/* Decorative torn paper edge */}
        <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12 Q50 24 100 12 Q150 0 200 12 Q250 24 300 12 Q350 0 400 12 V24 H0 V12 Z" fill="#ffb5eb" />
        </svg>
      </div>
    </div>
  );
};