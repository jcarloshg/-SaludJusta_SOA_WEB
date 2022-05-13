import { Spacer, Text } from '@nextui-org/react'
import DatePicker from 'react-date-picker'
import { Dropdown, GoBackButton, Subtitle, Title } from '../../../components'
import { AvailableAppointments, ModalConfirm } from './components'
import useCreateAppointment from './hooks/useCreateAppointment'

function SelectAppointment({ goToSearchCust = () => null }) {
  const {
    appt,
    onChangeTypeOfExam,
    onChangeDate,
    onSelectAppointment,
    onCloseConfirm,
    onConfirmSelectAppt,
  } = useCreateAppointment()

  return (
    <>
      <article className="col full-width select-appointment-container">
        <GoBackButton onClick={goToSearchCust} />
        <Title>Crear Cita</Title>
        <Subtitle>Selecciona el tipo de examan, la hora y la fecha.</Subtitle>
        <div className="select-appointment col center">
          <div className="full-width">
            <Dropdown
              label="Tipo de examen"
              options={appt.typesOfExams}
              value={appt.typeOfExam}
              onChange={onChangeTypeOfExam}
            />
          </div>
          <Spacer y={1} />
          <div className="full-width">
            <Text size={14} color="#028174">
              Fecha
            </Text>
            <Spacer y={0.2} />
            <DatePicker onChange={onChangeDate} value={appt.date} clearIcon={null} />
          </div>
        </div>
        <Spacer y={1} />
        <Subtitle>Horarios disponibles</Subtitle>
        <div className="full-width col center">
          <AvailableAppointments list={appt.availableSchedules} func={onSelectAppointment} />
        </div>
      </article>
      <ModalConfirm
        open={appt.confirmOpen}
        loading={appt.loading}
        onClose={onCloseConfirm}
        onConfirm={onConfirmSelectAppt}
        typeExam={appt.typeOfExam}
        date={appt.date.toISOString().slice(0, 10)}
        time={appt.time.slice(0, 5)}
      />
    </>
  )
}
// marthapg@fmail.com
export default SelectAppointment
