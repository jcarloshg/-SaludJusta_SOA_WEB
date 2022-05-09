import { Input } from '@nextui-org/react';

function InputModal({ label = '', value = '', onChange = () => null, ...props }) {
  return (
    <Input
      clearable
      bordered
      fullWidth
      color="primary"
      label={label}
      placeholder={label}
      css={{
        marginBottom: '0.8rem',
        // width: '18.75rem',
      }}
      value={value}
      onChange={onChange}
      size="sm"
      {...props}
    />
  );
}

export default InputModal;
