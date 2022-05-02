import { useEffect, useState } from 'react'
import { dateToStringYYYYMMDD } from '../../../utilities/date/dateToStringYYYYMMDD';
import { requestAppointmentsDay } from './services/requestAppointmentsDay';

export const useAppointments = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (nextValue) => setDate(nextValue);

    useEffect(() => {

        (async () => {
            const dateYYYYMMDD = dateToStringYYYYMMDD(date);
            const res = await requestAppointmentsDay("2022-04-21");
            console.log(res);
        })();

        return () => { }

    }, [date])

    return {
        date, onChange
    }
}
