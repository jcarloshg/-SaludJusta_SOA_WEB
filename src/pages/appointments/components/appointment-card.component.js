import { Card } from '@nextui-org/react';

function AppointmentCard() {
  return (
    <Card bordered shadow={false} hoverable css={{ borderColor: '$black' }}>
      <p>A hoverable card.</p>
    </Card>
  );
}

export default AppointmentCard;
