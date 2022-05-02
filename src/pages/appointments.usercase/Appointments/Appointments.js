
import Calendar from 'react-calendar';
import AppointmentsTable from './components/appointments-table.component';
import 'react-calendar/dist/Calendar.css';
import './appointments.css';
import { MainButton, Title } from '../../../components';
import { Spacer } from '@nextui-org/react';
import { useAppointments } from './useAppointments';

function Appointments() {

  const {
    date, onChange
  } = useAppointments();

  const columns = [
    { name: 'Name', uid: 'name' },
    { name: 'Height', uid: 'height' },
    { name: 'Mass', uid: 'mass' },
    { name: 'Birth Year', uid: 'birth_year' },
  ];
  // async function load({ signal, cursor }) {
  //   // If no cursor is available, then we're loading the first page.
  //   // Otherwise, the cursor is the next URL to load, as returned from the previous page.
  //   const res = await fetch(cursor || 'https://swapi.py4e.com/api/people/?search=', { signal });
  //   const json = await res.json();
  //   return {
  //     items: json.results,
  //     cursor: json.next,
  //   };
  // }
  // const list = useAsyncList({ load });

  const list = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      birth_year: '19BBY',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      birth_year: '112BBY',
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      birth_year: '33BBY',
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      birth_year: '41.9BBY',
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      birth_year: '19BBY',
    },
    {
      name: 'Owen Lars',
      height: '178',
      mass: '120',
      birth_year: '52BBY',
    },
  ];

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
              <Calendar onChange={onChange} value={date} minDate={new Date()} />
            </section>

            <section className="appointments-list">
              <AppointmentsTable columns={columns} list={list} />
            </section>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Appointments;
