import { useEffect, useState } from 'react';

// const typesOfExams = [
//   { value: 'AUDIOMETRÍA', label: 'Audiometría' },
//   { value: 'MASTOGRAFÍA', label: 'Mastografía' },
//   { value: 'ESPIROMETRÍA', label: 'Espirometría' },
//   { value: 'PERFIL TRIODE', label: 'Perfil Triode' },
//   { value: 'BIOMETRÍA HEMÁTICA', label: 'Biométrica Hemática' },
// ];

// const availableSchedules = [
// {
//   id: 1,
//   date: '2020-05-01',
//   time: '10:00',
//   status: 'Disponible',
// },
// {
//   id: 2,
//   date: '2020-05-01',
//   time: '11:00',
//   status: 'Disponible',
// },
// ];

function useCreateAppointment() {
  const [email, setEmail] = useState('');
  const [typeOfExams, setTypeOfExams] = useState('AUDIOMETRÍA');
  const [typesOfExams, setTypesOfExams] = useState([]);
  const [date, setDate] = useState(new Date());
  const [availableSchedules, setAvailableSchedules] = useState([]);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeTypeOfExam = (event) => {
    setTypeOfExams(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event);
  };

  return {
    email,
    typeOfExams,
    typesOfExams,
    date,
    availableSchedules,
    onChangeEmail,
    onChangeTypeOfExam,
    onChangeDate,
  };
}

export default useCreateAppointment;
