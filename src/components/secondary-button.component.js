import { Button } from '@nextui-org/react';

function SecondaryButton({ func = null, text = '', width = 250 }) {
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
        color: '#0AB68B',
        border: '1px solid #EAEAEA',
        backgroundColor: '#FFFFFF',
        width: `${width}px`,
      }}
    >
      {text}
    </Button>
  );
}

export default SecondaryButton;
