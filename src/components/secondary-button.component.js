import { Button } from '@nextui-org/react';

function SecondaryButton({ text = '', width = 250 }) {
  return (
    <Button
      css={{
        borderRadius: '8px',
        color: '#0AB68B',
        border: '1px solid #F2FFFE',
        backgroundColor: '#F2FFFE',
        width: `${width}px`,
      }}
    >
      {text}
    </Button>
  );
}

export default SecondaryButton;
