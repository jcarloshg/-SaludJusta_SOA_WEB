import { useEffect } from "react"
import { requestExamsToday } from "./services/requestExamsToday";

export const useExamenesPendientes = () => {

    useEffect(() => {

        console.log(`[useExamenesPendientes] -> useEffect`);
        (async () => {
            const data = await requestExamsToday();
            console.log(`[data] -> `, data);
        })();

        return () => { }
    }, [])


}