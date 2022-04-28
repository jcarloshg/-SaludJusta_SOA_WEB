import { Text } from '@nextui-org/react';

function Subtitle({ text = '' }) {
  return (
    <Text h2 size={18} color="#001917" weight="bold">
      {text}
    </Text>
  );
}

export default Subtitle;
