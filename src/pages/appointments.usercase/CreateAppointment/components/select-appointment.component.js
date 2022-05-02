import { Input, Spacer } from '@nextui-org/react';
import { Dropdown, ErrorButton, MainButton, Subtitle, Title } from '../../../../components';

const { log } = console;

const options = [
  { label: 'Fruit', value: 'fruit' },
  { label: 'Vegetable', value: 'vegetable' },
  { label: 'Meat', value: 'meat' },
];

function SelectAppointment() {
  return (
    <article className="col full-width select-appointment-container">
      <Title>Crear Cita</Title>
      <Spacer y={0.4} />
      <Subtitle>Selecciona el tipo de examan, la hora y la fecha.</Subtitle>
      <Spacer y={0.4} />
      <Dropdown
        fullWidth
        label="Tipo de examen"
        options={options}
        value=""
        onChange={() => log('onChange not defined')}
      />
      <Spacer y={1} />
      <Subtitle>Horarios disponibles</Subtitle>
      <Spacer y={1} />
      <Input bordered fullWidth label="Fecha" type="date" color="primary" min={new Date()} />
      <Spacer y={1} />
      <Input bordered fullWidth label="Hora" type="time" color="primary" />
      <Spacer y={1} />
      <section className="row justify-flex-end">
        <MainButton>Guardar cita</MainButton>
        <Spacer x={0.8} />
        <ErrorButton>Cancelar</ErrorButton>
      </section>
    </article>
  );
}

export default SelectAppointment;
