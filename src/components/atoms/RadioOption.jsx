export const RadioOption = ({ label, checked, onChange }) => {
  return (
    <label className="radio-option">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};