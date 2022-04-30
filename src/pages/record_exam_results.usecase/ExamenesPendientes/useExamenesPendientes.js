import { useEffect, useState } from "react"
import { createAdaptedUser } from "../../../adapters";
import { examsViewObject } from "./models";
import { requestExamsToday } from "./services/requestExamsToday";

export const useExamenesPendientes = () => {

    const [usersClients, setUsersClients] = useState([]);
    const [examsArryViewObject, setExamsArryViewObject] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await requestExamsToday();
            if (data.data == null) return;
            setUsersClients(data.data.map((item, index) => createAdaptedUser(item)));
        })();
        return () => { }
    }, []);

    useEffect(() => {

        if (usersClients.length === 0) return;

        const auxusersClients = usersClients.map(
            (item, index) => examsViewObject({
                id: index, // ! this is important to render into table
                nameClient: `${item.name} ${item.lastName}`,
                hour: item.appointments[0].time,
                status: item.appointments[0].status,
                typeExam: item.appointments[0].exam.examCatalogItem.typeExam,
            })
        );
        setExamsArryViewObject(auxusersClients);

        return () => { }
    }, [usersClients]);


    return {
        examsArryViewObject
    }
}