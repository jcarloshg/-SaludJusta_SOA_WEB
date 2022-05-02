import { Button } from '@nextui-org/react';

function MainButton({ func = null, width = '250px', children }) {
  const executeFuntion = () => {
    try {
      func();
    } catch (error) {
      console.log(`[MainButton] -> `, error);
    }
  };

  return (
    <Button
      onClick={() => executeFuntion()}
      css={{
        borderRadius: '8px',
        width: width,
        // fontSize: '1rem',
      }}
      color="primary"
      shadow
      auto
    >
      {children}
    </Button>
  );
}

export default MainButton;
