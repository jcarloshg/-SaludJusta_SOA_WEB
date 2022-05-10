import { Spacer, Text } from '@nextui-org/react'
import { useContext } from 'react'
import DatePicker from 'react-date-picker'
import { Dropdown, GoBackButton, Subtitle, Title } from '../../../components'
import { AppointmentsContext } from '../HomeAppointments/contexts/AppointmentsContext'
import { AvailableAppointments } from './components'
import useCreateAppointment from './hooks/useCreateAppointment'

function SelectAppointment() {
  const { goToSearchCust } = useContext(AppointmentsContext)
  const {
    date,
    typeOfExam,
    typesOfExams,
    availableSchedules,
    onChangeTypeOfExam,
    onChangeDate,
    onSelectAppt,
  } = useCreateAppointment()

  return (
    <article className="col full-width select-appointment-container">
      <GoBackButton onClick={goToSearchCust} />
      <Title>Crear Cita</Title>
      <Subtitle>Selecciona el tipo de examan, la hora y la fecha.</Subtitle>
      <div className="select-appointment col center">
        <div className="full-width">
          <Dropdown
            label="Tipo de examen"
            options={typesOfExams}
            value={typeOfExam}
            onChange={onChangeTypeOfExam}
          />
        </div>
        <Spacer y={1} />
        <div className="full-width">
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
        <AvailableAppointments list={availableSchedules} func={onSelectAppt} />
      </div>
    </article>
  )
}

export default SelectAppointment
