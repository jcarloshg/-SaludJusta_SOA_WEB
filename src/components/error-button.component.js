import { Button } from '@nextui-org/react';

function ErrorButton({ width = '250px', onClick = null, children }) {
  return (
    <Button
      color="error"
      shadow
      auto
      css={{
        borderRadius: '8px',
        width: width,
        // color: '#fff',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ErrorButton;
