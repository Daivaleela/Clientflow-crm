const Dropdown = ({ value, onChange, options, className }) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map((option) => ( 
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;