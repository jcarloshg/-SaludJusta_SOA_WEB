import { Input } from '@nextui-org/react'
import { useMemo } from 'react'
import { validatePhone } from '../../../../../utilities'

function InputPhone({ phone = '', setPhone = () => null, reset = () => null }) {
  const helper = useMemo(() => {
    if (!phone)
      return {
        text: '',
        color: '',
      }
    const isValid = validatePhone(phone)
    return {
      text: isValid ? 'Teléfono válido' : 'Teléfono inválido',
      color: isValid ? 'primary' : 'error',
    }
  }, [phone])

  return (
    <Input
      value={phone}
      onChange={setPhone}
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
  )
}

export default InputPhone
