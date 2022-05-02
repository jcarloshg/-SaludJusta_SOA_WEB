import { useInput } from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { examAdapter } from '../../../adapters/exam.adapter';
import User from '../../../models/User.entitie';
import { DataContext } from '../HomeExam/contexts/DataContext';
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

        const exam = examAdapter(resRecordResults.data.data);

        console.log(`[resRecordResults] -> `, resRecordResults);
        console.log(`[exam] -> `, exam);

    }

    const cancel = () => navigate("../");

    return {
        user,
        bindings,
        saveResults, cancel
    };
}
