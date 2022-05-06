import { Input } from '@nextui-org/react';
import { useMemo } from 'react';
import { validatePhone } from '../../../../utilities';

function InputPhone({ value = '', reset = () => null, bindings = {} }) {
  const helper = useMemo(() => {
    if (!value)
      return {
        text: '',
        color: '',
      };
    const isValid = validatePhone(value);
    return {
      text: isValid ? 'Teléfono válido' : 'Teléfono inválido',
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
      type="text"
      label="Número de teléfono"
      placeholder="0001112233"
    />
  );
}

export default InputPhone;
