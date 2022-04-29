import { Title } from "../../../components";
import { useExamenesPendientes } from "./useExamenesPendientes";

export const ExamenesPendientes = () => {

    useExamenesPendientes();

    return (
        <div>
            <Title text="Examenes pendientes" />
            <p>Este es una prueba </p>
        </div>
    );
}