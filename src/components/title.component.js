import { Text } from '@nextui-org/react';

function Title({ text = '' }) {
  return (
    <Text h1 size={28} color="#001917" weight="bold">
      {text}
    </Text>
  );
}

export default Title;
