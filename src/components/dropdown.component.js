import uid from '../utilities/uid'
import './dropdown.css'

function Dropdown({
  fullWidth = true,
  label = '',
  value = '',
  options = [],
  onChange = () => null,
}) {
  return (
    <label className="dropdown-label">
      <p>{label}</p>
      <select
        className={`dropdown-select${fullWidth ? ' full-width' : ''}`}
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option className="dropdown-option" key={uid()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Dropdown
