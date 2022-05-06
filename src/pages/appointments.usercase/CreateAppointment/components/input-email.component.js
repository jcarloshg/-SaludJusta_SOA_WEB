import { Input } from '@nextui-org/react';
import { useMemo } from 'react';
import { validateEmail } from '../../../../utilities';

function InputEmail({ value = '', reset = () => null, bindings = {} }) {
  const helper = useMemo(() => {
    if (!value)
      return {
        text: '',
        color: '',
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? 'Correo electrónico válido' : 'Correo electrónico inválido',
      color: isValid ? 'primary' : 'error',
    };
  }, [value]);

  return (
    <Input
      {...bindings}
      clearable
      bordered
      fullWidth
      size="sm"
      shadow={false}
      onClearClick={reset}
      status={helper.color}
      color={helper.color}
      helperColor={helper.color}
      helperText={helper.text}
      type="email"
      label="Correo electrónico"
      placeholder="correo@ejemplo.com"
    />
  );
}

export default InputEmail;
