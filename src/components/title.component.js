import { Text } from '@nextui-org/react';

function Title({ children }) {
  return (
    <Text size={24} color="#028174" weight="medium">
      {children}
    </Text>
  );
}

export default Title;
