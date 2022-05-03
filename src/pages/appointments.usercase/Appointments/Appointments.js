
import Calendar from 'react-calendar';
import AppointmentsTable from './components/appointments-table.component';
import 'react-calendar/dist/Calendar.css';
import './appointments.css';
import { MainButton, Title } from '../../../components';
import { Spacer } from '@nextui-org/react';
import { useAppointments } from './useAppointments';
import { columns_customTable } from './models';
import { ModalInfoAppointment } from './components';

function Appointments() {

  const {
    appointmentsArryView,
    date, onChange,
    isVisibleModal, setIsVisibleModal,
    selectUser, selectedUser
  } = useAppointments();

  return (
    <div className='container'>
      <main className="row">

        <article className="appointments-container">
          <section className="row space-between center appointments-actions">
            <Title>Citas del día</Title>
            <MainButton func={() => console.log("Crear cita")} width="200px">Crear cita</MainButton>
          </section>

          <Spacer y={1} x={2} />
          <section className="row space-between flex-start">
            <section className="appointments-calendar">
              <Calendar
                onChange={onChange}
                value={date}
                minDate={new Date()} />
            </section>

            <section className="appointments-list">
              <AppointmentsTable
                columns={columns_customTable}
                list={appointmentsArryView}
                func_SecondaryButton={(idAppointment) => selectUser(idAppointment)}
              />
            </section>
          </section>
        </article>

        <ModalInfoAppointment
          visible={isVisibleModal}
          onClose={() => setIsVisibleModal(false)}
          user={selectedUser}
          func_MainButton={() => console.log("func_MainButton")}
          func_SecondaryButton={() => setIsVisibleModal(false)}
        />

      </main>
    </div>
  );
}

export default Appointments;
