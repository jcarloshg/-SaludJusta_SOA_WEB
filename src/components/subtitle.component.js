import { Text } from '@nextui-org/react';

function Subtitle({ children }) {
  return (
    <Text size={18} color="#001917" weight="medium">
      {children}
    </Text>
  );
}

export default Subtitle;
