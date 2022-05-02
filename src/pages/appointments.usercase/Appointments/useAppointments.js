import { useEffect, useState } from 'react'
import { createAdaptedUser } from '../../../adapters';
import { dateToStringYYYYMMDD } from '../../../utilities/date/dateToStringYYYYMMDD';
import { appointmentViewObject } from './models';
import { requestAppointmentsDay } from './services/requestAppointmentsDay';

export const useAppointments = () => {

    const [usersClients, setUsersClients] = useState([]);
    const [appointmentsArryView, setAppointmentsArryView] = useState([]);

    const [date, setDate] = useState(new Date());


    const onChange = (nextValue) => setDate(nextValue);

    useEffect(() => {
        (async () => {
            const dateYYYYMMDD = dateToStringYYYYMMDD(date);
            const resRequestAppointmentsDay = await requestAppointmentsDay("2022-04-21");
            setUsersClients(resRequestAppointmentsDay.data.map((item) => createAdaptedUser(item)));
        })();
        return () => { }
    }, [date]);

    useEffect(() => {

        if (usersClients.length === 0) return;

        const auxusersClients = usersClients.map(
            (item, index) => appointmentViewObject({
                id: index, // ! this is important to render into table
                idAppointment: item.appointments[0].idAppointment,
                nameClient: `${item.name} ${item.lastName}`,
                hour: item.appointments[0].time,
                status: item.appointments[0].status,
                typeExam: item.appointments[0].exam.examCatalogItem.typeExam,
            })
        );
        setAppointmentsArryView(auxusersClients);

        return () => { }
    }, [usersClients])


    return {
        appointmentsArryView,
        date, onChange
    }
}
