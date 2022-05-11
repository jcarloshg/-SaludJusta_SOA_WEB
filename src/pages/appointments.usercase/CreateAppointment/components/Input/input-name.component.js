import { Input } from '@nextui-org/react'

function InputName({ value = '', onChange = () => null, ...props }) {
  return (
    <Input
      clearable
      bordered
      fullWidth
      color="primary"
      label="Apellidos"
      placeholder="p. ej. Pérez Gómez"
      css={{
        marginBottom: '0.8rem',
        // width: '18.75rem',
      }}
      value={value}
      onChange={onChange}
      size="sm"
      {...props}
    />
  )
}

export default InputName
