import { Text } from '@nextui-org/react';

function MainTitle({ text = '' }) {
  return (
    <Text h1 size={38} color="#028174" weight="bold">
      {text}
    </Text>
  );
}

export default MainTitle;
