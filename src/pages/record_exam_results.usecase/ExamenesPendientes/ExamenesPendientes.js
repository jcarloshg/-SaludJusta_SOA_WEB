import { Title } from "../../../components";
import { AppointmentsView } from "./components/AppointmentsView/AppointmentsView";
import { useExamenesPendientes } from "./useExamenesPendientes";

export const ExamenesPendientes = () => {

    const {
        appointmensToday,
    } = useExamenesPendientes();

    return (
        <div>
            <Title text="Examenes pendientes" />

            <div>
                {
                    appointmensToday.map((item, index) => {
                        return (<AppointmentsView appointment={item} key={index} />)
                    })
                }
            </div>

        </div>
    );
}