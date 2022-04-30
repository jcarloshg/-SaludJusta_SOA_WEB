import { useEffect, useState } from "react"
import { createAdaptedUser } from "../../../adapters";
import ExamsViewObject from "./models/ExamsViewObject";
import { requestExamsToday } from "./services/requestExamsToday";

export const useExamenesPendientes = () => {

    const [usersClients, setUsersClients] = useState([]);
    const [examsViewObject, setExamsViewObject] = useState([]);

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
        setExamsViewObject(
            usersClients.map(
                item => new ExamsViewObject({
                    nameClient: `${item.name} ${item.lastName}`,
                    hour: item.appointments[0].time,
                    status: item.appointments[0].status,
                    typeExam: item.appointments[0].exam.examCatalogItem.typeExam,
                })
            )
        );

        return () => { }
    }, [usersClients]);


    return {
        examsViewObject
    }
}