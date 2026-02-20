export const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="text-input"
      />
    </div>
  );
};