import { Input } from '@nextui-org/react'

function InputAge({ value = '', onChange = () => null }) {
  return (
    <Input
      clearable={false}
      bordered
      fullWidth
      color="primary"
      label="Edad"
      placeholder="Edad"
      css={{
        marginBottom: '0.8rem',
        // width: '18.75rem',
      }}
      value={value}
      onChange={onChange}
      size="sm"
      type="number"
    />
  )
}

export default InputAge
