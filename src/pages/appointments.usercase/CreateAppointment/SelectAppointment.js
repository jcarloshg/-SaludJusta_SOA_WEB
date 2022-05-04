import { Spacer, Text } from '@nextui-org/react';
import DatePicker from 'react-date-picker';
import { Dropdown, GoBackButton, Subtitle, Title } from '../../../components';
import AvailableAppointments from './components/available-appointments.component';

function SelectAppointment({
  typesOfExams,
  typeOfExam,
  onChangeTypeOfExam,
  date,
  onChangeDate,
  availableSchedules,
  onGoBack,
}) {
  return (
    <article className="col full-width select-appointment-container">
      <GoBackButton onClick={onGoBack} />
      <Title>Crear Cita</Title>
      <Subtitle>Selecciona el tipo de examan, la hora y la fecha.</Subtitle>
      <div className="col center full-width">
        <Dropdown
          fullWidth
          label="Tipo de examen"
          options={typesOfExams}
          value={typeOfExam}
          onChange={onChangeTypeOfExam}
        />
        <Spacer y={1} />
        <div>
          <Text size={14} color="#028174">
            Fecha
          </Text>
          <Spacer y={0.2} />
          <DatePicker onChange={onChangeDate} value={date} clearIcon={null} />
        </div>
      </div>
      <Spacer y={1} />
      <Subtitle>Horarios disponibles</Subtitle>
      <div className="full-width col center">
        <AvailableAppointments list={availableSchedules} />
      </div>
    </article>
  );
}

export default SelectAppointment;
