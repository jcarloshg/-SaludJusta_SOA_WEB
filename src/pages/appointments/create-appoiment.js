import { Input, Spacer } from '@nextui-org/react';
import { Dropdown, Subtitle } from '../../components';
import { AppointmentInput, AppointmentInputAge, AppointmentModal } from './components';

function CreateAppoiment({ visible = false, closeHandler }) {
  const onSave = () => {
    console.log('save');
    closeHandler();
  };

  return (
    <AppointmentModal open={visible} onClose={closeHandler} onSave={onSave} title="Crear una cita">
      <Subtitle>Datos personales</Subtitle>
      <Spacer y={0.2} />
      <AppointmentInput label="Nombre" placeholder="p.ej Luis" />
      <AppointmentInput label="Apellidos" placeholder="p.ej Perez" />
      <AppointmentInputAge />
      <Spacer y={0.2} />
      <Subtitle>Fecha y hora</Subtitle>
      <Spacer y={0.2} />
      <Input bordered fullWidth label="Fecha" type="date" color="primary" />
      <Input bordered fullWidth label="Hora" type="time" color="primary" />
      <Dropdown
        fullWidth
        label="Tipo de examen"
        options={[
          { label: 'Fruit', value: 'fruit' },
          { label: 'Vegetable', value: 'vegetable' },
          { label: 'Meat', value: 'meat' },
        ]}
        value=""
        onChange={() => {}}
      />
    </AppointmentModal>
  );
}

export default CreateAppoiment;
