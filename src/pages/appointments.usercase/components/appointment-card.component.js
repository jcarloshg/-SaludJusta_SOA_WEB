import { Card } from '@nextui-org/react';

function AppointmentCard() {
  return (
    <Card
      bordered
      shadow={false}
      hoverable
      css={{
        borderColor: '$primary',
        backgroundColor: '#fff',
        color: '$primary',
      }}
    >
      <p>A hoverable card.</p>
    </Card>
  );
}

export default AppointmentCard;
