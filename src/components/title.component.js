import { Text } from '@nextui-org/react';

function Title({ text = '' }) {
  return (
    <Text h1 size={28} color="primary" weight="bold">
      {text}
    </Text>
  );
}

export default Title;
