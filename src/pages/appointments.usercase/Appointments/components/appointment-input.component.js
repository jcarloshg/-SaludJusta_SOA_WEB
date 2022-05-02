import { Input } from '@nextui-org/react';

function AppointmentInput({ label = '', placeholder = '' }) {
  return (
    <Input
      clearable
      bordered
      fullWidth
      label={label}
      color="primary"
      placeholder={placeholder}
      css={{
        fontSize: '50px',
      }}
    />
  );
}

export default AppointmentInput;
