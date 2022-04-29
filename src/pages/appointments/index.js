import { Spacer } from '@nextui-org/react';
import { Title, Topbar } from '../../components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointments.css';
import Separator from './components/separator.component';
import AppointmentCard from './components/appointment-card.component';

function cambiarFondo() {
  document.body.style = 'background: #f2fffe;';
}

function Appointments() {
  cambiarFondo();

  return (
    <>
      <Topbar showActions />
      <nav className="nav-bar">
        <div className="sidebar">
          <Title text="Menú" />
        </div>
      </nav>
      <main className="main-appointments">
        <Title text="Citas del dia" />
        <Spacer y={0.8} />
        <div className="appointments-container">
          <Calendar />
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
