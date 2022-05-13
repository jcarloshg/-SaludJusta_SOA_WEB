import { BiArrowBack } from 'react-icons/bi';
import './go-back-button.css';

function GoBackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick}>
      <BiArrowBack />
    </button>
  );
}

export default GoBackButton;
