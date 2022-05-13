import { Button } from '@nextui-org/react';

function SecondaryButton({ func = null, text = '', width = '200px' }) {
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
        color: '#028174',
        border: '1px solid #EAEAEA',
        backgroundColor: '#FFFFFF',
        width: width,
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        // padding: '1.2rem 2.4rem',
        // hover
        '&:hover': {
          backgroundColor: '#FAFFFE',
          border: '1px solid #0AB68B',
          color: '#028174',
        },
      }}
      auto
    >
      {text}
    </Button>
  );
}

export default SecondaryButton;
