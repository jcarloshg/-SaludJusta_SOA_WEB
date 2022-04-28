import { Input } from '@nextui-org/react';

function InputPassword({ onChange, value = '', width = 250 }) {
  return (
    <Input.Password
      label="Contraseña"
      placeholder="xxxxxxxxxxxx"
      width={`${width}px`}
      value={value}
      onChange={onChange}
      autoComplete="off"
      bordered
      color="primary"
    />
  );
}

export default InputPassword;
