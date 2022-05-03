import { useEffect, useState } from 'react';
import { getAvailableHoursDay, requesExamTypes } from '../services';

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

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

function useCreateAppointment() {
  const [email, setEmail] = useState('');
  const [typeOfExams, setTypeOfExams] = useState('AUDIOMETRÍA');
  const [typesOfExams, setTypesOfExams] = useState([]);
  const [date, setDate] = useState(new Date());
  const [availableSchedules, setAvailableSchedules] = useState([]);

  useEffect(() => {
    const fetchTypesOfExams = async () => {
      const res = await requesExamTypes();
      console.log(`[typos] -> `, res);

      if (res !== null) {
        const types = res.data.map((type) => ({
          value: type.typeExam,
          label: capitalize(type.typeExam.toLowerCase()),
        }));

        setTypesOfExams(types);
      }
    };

    fetchTypesOfExams();
  }, []);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeTypeOfExam = (event) => {
    console.log(`[onChangeTypeOfExam] -> `, event.target.value);
    setTypeOfExams(event.target.value);
  };

  const onChangeDate = async (event) => {
    setDate(event);
    const dateStr = event.toISOString().slice(0, 10);
    console.log(`[onChangeDate] -> `, typeOfExams, dateStr);
    const res = await getAvailableHoursDay(typeOfExams, dateStr);
    console.log(`[res] -> `, res);
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
