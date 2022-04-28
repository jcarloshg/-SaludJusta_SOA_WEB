import { Button } from '@nextui-org/react';

function MainButton({ func = null, text = '', width = 250 }) {

  const executeFuntion = () => {
    try {
      func();
    } catch (error) {
      console.log(`[MainButton] -> `, error);
    }
  }

  return (
    <Button
      onClick={() => executeFuntion()}
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
