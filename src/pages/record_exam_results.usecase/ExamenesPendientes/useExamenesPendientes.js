import { useEffect, useState } from "react"
import { createAdapterAppointment } from "./adapters/appointment.adapter";
import { requestExamsToday } from "./services/requestExamsToday";

export const useExamenesPendientes = () => {

    const [appointmensToday, setAppointmensToday] = useState([]);

    useEffect(() => {

        (async () => {
            const data = await requestExamsToday();
            console.log(`[data] -> `, data.data);
            if (data.data == null) return;
            setAppointmensToday(data.data.map((item, index) => createAdapterAppointment(item)));
        })();

        return () => { }
    }, []);

    return {
        appointmensToday,
    }
}