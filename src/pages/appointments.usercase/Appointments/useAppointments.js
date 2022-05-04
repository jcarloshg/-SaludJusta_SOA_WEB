
import { useEffect, useState } from 'react'
import { createAdaptedUser } from '../../../adapters';
import User from '../../../models/User.entitie';
import { dateToStringYYYYMMDD } from '../../../utilities/date/dateToStringYYYYMMDD';
import { appointmentViewObject } from './models';
import { markAppointmentAsProgress } from './services/markAppointmentAsProgress';
import { requestAppointmentsDay } from './services/requestAppointmentsDay';

export const useAppointments = () => {


    const [usersClients, setUsersClients] = useState([]);
    const [appointmentsArryView, setAppointmentsArryView] = useState([]);

    const [date, setDate] = useState(new Date());
    const onChange = (nextValue) => setDate(nextValue);

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(new User({}));

    useEffect(() => {
        (async () => {
            const dateYYYYMMDD = dateToStringYYYYMMDD(date);
            const resRequestAppointmentsDay = await requestAppointmentsDay(dateYYYYMMDD);
            setUsersClients(resRequestAppointmentsDay.data.map((item) => createAdaptedUser(item)));
        })();
        return () => { }
    }, [date]);

    useEffect(() => {

        if (usersClients.length === 0) {
            setAppointmentsArryView([]);
            return;
        }

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


    const selectUser = (idAppointment) => {
        const selectedUserFinded = usersClients.find(
            user => user.appointments[0].idAppointment === idAppointment
        );
        setSelectedUser(new User(selectedUserFinded));
    }

    useEffect(() => {
        if (selectedUser.appointments.length === 0) return;
        setIsVisibleModal(true);
        return () => { }
    }, [selectedUser])

    const ponerCitaEnCurso = async () => {
        const idAppointmentAux = selectedUser.appointments[0].idAppointment;
        const res = await markAppointmentAsProgress(idAppointmentAux);

        if (res.data.isOk === false) {
            // TODO - show error
            return;
        }

        setIsVisibleModal(false);
        setSelectedUser(new User({}));

        setUsersClients(usersClients.filter(
            user => selectedUser.appointments[0].idAppointment !== user.appointments[0].idAppointment
        ));
    }

    return {
        appointmentsArryView,
        date, onChange,
        isVisibleModal, setIsVisibleModal,
        selectUser, selectedUser,
        ponerCitaEnCurso
    }
}
