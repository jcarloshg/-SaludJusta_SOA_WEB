import { Input } from '@nextui-org/react'
import { useMemo } from 'react'
import { validateEmail } from '../../../../../utilities'

function InputEmail({
  email = '',
  setEmail = () => null,
  reset = () => null,
  fullWidth = true,
  disabled = false,
}) {
  const helper = useMemo(() => {
    if (!email)
      return {
        text: '',
        color: '',
      }
    const isValid = validateEmail(email)
    return {
      text: isValid ? 'Correo electrónico válido' : 'Correo electrónico inválido',
      color: isValid ? 'primary' : 'error',
    }
  }, [email])

  return (
    <Input
      value={email}
      onChange={setEmail}
      clearable
      bordered
      fullWidth={fullWidth}
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
      width="330px"
      disabled={disabled}
    />
  )
}

export default InputEmail
