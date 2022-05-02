import { Input } from '@nextui-org/react';

function AppointmentInputAge() {
  return (
    <Input
      bordered
      fullWidth
      label="Edad (años)"
      color="primary"
      placeholder="18"
      type="number"
      min={0}
      max={100}
      css={{
        fontSize: '50px',
      }}
    />
  );
}

export default AppointmentInputAge;
