import { Button } from '@nextui-org/react';

function MainButton({ func = null, width = '200px', children }) {
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
        width: width,
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        padding: '1.2rem 2.4rem',
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
