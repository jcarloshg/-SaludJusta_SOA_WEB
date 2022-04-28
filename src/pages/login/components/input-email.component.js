import { Input } from '@nextui-org/react';

function InputEmail({ value = '', width = 250, onChange = (e) => e.preventDefault() }) {
  return (
    <Input
      label="Correo"
      placeholder="correo@ejemplo.com"
      width={`${width}px`}
      value={value}
      onChange={onChange}
      autoComplete="off"
      bordered
      color="primary"
    />
  );
}

export default InputEmail;
