import { Button } from '@nextui-org/react';

function MainButton({ text = '', width = 250 }) {
  return (
    <Button
      css={{
        borderRadius: '8px',
        width: `${width}px`,
      }}
      color="primary"
      shadow
    >
      {text}
    </Button>
  );
}

export default MainButton;
