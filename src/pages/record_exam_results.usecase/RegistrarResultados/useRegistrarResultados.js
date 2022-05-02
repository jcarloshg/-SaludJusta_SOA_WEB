import { useInput } from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import User from '../../../models/User.entitie';
import { DataContext } from '../HomeExam/contexts/DataContext';
import { markAppointmentAsComplete } from './service';
import { recordResults } from './service/recordResults';

export const useRegistrarResultados = () => {

    const { data } = useContext(DataContext);

    const navigate = useNavigate();

    const [user, setUser] = useState(new User({}));

    const {
        value: controlledValue,
        // setValue: setControlledValue,
        bindings,
    } = useInput("");

    useEffect(() => {
        // ! if not exist this condition the progam die D:
        if (data.idUser === null) return;
        setUser(new User(data));
    }, []);

    const saveResults = async () => {

        const idExam = user.appointments[0].exam.idExam;
        const resRecordResults = await recordResults(idExam, controlledValue);

        if (resRecordResults.data.isOk === false) {
            console.log(resRecordResults.data);
            // TODO - show error
            return;
        }

        // const exam = examAdapter(resRecordResults.data.data);
        const resAppointment = await markAppointmentAsComplete(user.appointments[0].idAppointment);
        if (resAppointment.data.isOk === false) {
            console.log(resAppointment.data);
            // TODO - show error
            return;
        }

        navigate("../");

    }

    const cancel = () => navigate("../");

    return {
        user,
        bindings,
        saveResults, cancel
    };
}
