export const TextInput = ({ value, onChange, placeholder, rows = 8 }) => {
  return (
    <div className="relative w-full flex flex-col items-center mt-8">
      {/* Pin SVG */}
      <div className="absolute -top-6 z-10">
        <svg className="w-10 h-10 text-red-400 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="7" r="4" fill="#e75480" stroke="#b91c1c" strokeWidth="1.5" />
          <rect x="11" y="11" width="2" height="8" rx="1" fill="#b91c1c" />
        </svg>
      </div>
      {/* Notepad paper effect */}
      <div className="relative w-full max-w-lg p-6 pt-10 bg-yellow-50 rounded-2xl shadow-2xl border border-yellow-200" style={{
        background: 'repeating-linear-gradient(180deg, #fffbe7, #fffbe7 24px, #ffe4b5 25px, #ffe4b5 26px)',
        boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.15)',
        borderRadius: '1.5rem',
        border: '2px solid #ffe4b5',
        position: 'relative',
      }}>
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full bg-transparent px-4 py-3 rounded-xl outline-none transition resize-none text-gray-800 placeholder:text-pink-400 font-medium text-lg"
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
          <path d="M0 12 Q50 24 100 12 Q150 0 200 12 Q250 24 300 12 Q350 0 400 12 V24 H0 V12 Z" fill="#ffe4b5" />
        </svg>
      </div>
    </div>
  );
};