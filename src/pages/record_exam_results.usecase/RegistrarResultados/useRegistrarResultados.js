import { useInput } from '@nextui-org/react';
import React, { useContext, useEffect, useState } from 'react'
import User from '../../../models/User.entitie';
import { DataContext } from '../HomeExam/contexts/DataContext';

export const useRegistrarResultados = () => {

    const { data } = useContext(DataContext);

    const [user, setUser] = useState(new User({}));

    const {
        value: controlledValue, setValue: setControlledValue, reset, bindings,
    } = useInput("");

    useEffect(() => {
        // ! if not exist this condition the progam die D:
        if (data.idUser === null) return;
        setUser(new User(data));
    }, []);

    const saveResults = () => {
        console.log(controlledValue);
    }

    const cancel = () => {
        console.log(controlledValue);
    }

    return {
        user,
        bindings,
        saveResults
    };
}
