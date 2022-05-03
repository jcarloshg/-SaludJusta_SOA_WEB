import uid from '../utilities/uid';
import './dropdown.css';

const { log } = console;

function Dropdown({
  fullWidth = false,
  label = '',
  value = '',
  options = [],
  onChange = () => log('onChange not defined'),
}) {
  return (
    <label className="dropdown-label">
      <p>{label}</p>
      <select
        className={`dropdown-select${fullWidth ? ' full-width' : ''}`}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option className="dropdown-option" key={uid()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Dropdown;
