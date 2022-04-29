import { Text } from '@nextui-org/react';
import './Separator.css';

function Separator({ time = '10:00 am' }) {
  return (
    <div className="separator">
      <Text color="primary">{time}</Text>
      <div className="separator-line" />
    </div>
  );
}

export default Separator;
