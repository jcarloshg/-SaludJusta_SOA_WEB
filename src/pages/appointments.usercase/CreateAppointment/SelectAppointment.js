import { Spacer, Text } from '@nextui-org/react'
import { useContext } from 'react'
import DatePicker from 'react-date-picker'
import { Dropdown, GoBackButton, Subtitle, Title } from '../../../components'
import { AppointmentsContext } from '../HomeAppointments/contexts/AppointmentsContext'
import { AvailableAppointments } from './components'
import useCreateAppointment from './hooks/useCreateAppointment'

function SelectAppointment() {
  const { goToSearchCustomer } = useContext(AppointmentsContext)
  const {
    date,
    typeOfExam,
    typesOfExams,
    availableSchedules,
    onChangeTypeOfExam,
    onChangeDate,
  } = useCreateAppointment()

  return (
    <article className="col full-width select-appointment-container">
      <GoBackButton onClick={goToSearchCustomer} />
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
  )
}

export default SelectAppointment
