import { Text } from '@nextui-org/react';

function Title({ children }) {
  return (
    <Text h1 size={24} color="primary" weight="medium">
      {children}
    </Text>
  );
}

export default Title;
