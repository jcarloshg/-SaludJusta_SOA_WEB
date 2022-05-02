import { Spacer } from '@nextui-org/react';
import { MainButton, Title } from '../../components';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './Appointments.css';
import { AppointmentCard, Separator } from './components';
import CreateAppoiment from './create-appoiment';

function Appointments() {
  const [value, setValue] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  function onChange(nextValue) {
    console.log('calendar', nextValue);
    setValue(nextValue);
  }

  return (
    <>
      {/* <Topbar showActions /> */}
      {/* <nav className="nav-bar">
        <div className="sidebar">
          <Title>Menú</Title>
        </div>
      </nav> */}
      <main className="main-appointments">
        <div className="appointments-container">
          <Title>Citas del día</Title>
          <MainButton func={handler} width="200px">
            Crear cita
          </MainButton>
        </div>
        <Spacer y={0.8} />
        <div className="appointments-container">
          <Calendar onChange={onChange} value={value} minDate={new Date()} />
          <div className="appointments-list">
            <Separator />
            <AppointmentCard />
            <Spacer y={0.8} />
            <AppointmentCard />
            <Spacer y={0.8} />
            <Separator />
            <AppointmentCard />
            <Spacer y={0.8} />
            <AppointmentCard />
            <Spacer y={0.8} />
          </div>
        </div>
      </main>
      <CreateAppoiment visible={visible} closeHandler={closeHandler} />
    </>
  );
}

export default Appointments;
