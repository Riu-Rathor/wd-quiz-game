export const ScaleOption = ({ value, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`scale-option ${selected ? "selected" : ""}`}
    >
      {value}
    </button>
  );
};