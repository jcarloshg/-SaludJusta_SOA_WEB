import React, { useContext, useEffect, useState } from 'react'
import Appointment from '../../../models/Appointment.entitie';
import { DataContext } from '../HomeExam/contexts/DataContext';

export const useRegistrarResultados = () => {

    const { data } = useContext(DataContext);

    const [appointment, setAppointment] = useState(new Appointment({}));

    useEffect(() => {
        // ! if not exist this condition the progam die D:
        setAppointment(new Appointment(data.appointments[0]));
    }, []);

    return {
        appointment,
    };
}
