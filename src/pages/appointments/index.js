import { Spacer } from '@nextui-org/react';
import { MainButton, Title, Topbar } from '../../components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointments.css';
import Separator from './components/separator.component';
import AppointmentCard from './components/appointment-card.component';
import { useState } from 'react';

function cambiarFondo() {
  document.body.style = 'background: #f2fffe;';
}

function Appointments() {
  cambiarFondo();

  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    console.log('calendar', nextValue);
    setValue(nextValue);
  }

  return (
    <>
      <Topbar showActions />
      <nav className="nav-bar">
        <div className="sidebar">
          <Title text="Menú" />
        </div>
      </nav>
      <main className="main-appointments">
        <div className="appointments-container">
          <Title text="Citas del dia" />
          <MainButton text="Crear cita" width={200} />
        </div>
        <Spacer y={0.8} />
        <div className="appointments-container">
          <Calendar onChange={onChange} value={value} />
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
    </>
  );
}

export default Appointments;
