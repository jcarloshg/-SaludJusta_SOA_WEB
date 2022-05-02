
import { AiOutlineFileDone, AiFillExperiment } from "react-icons/ai";

export const ItemsMenu = [
    {
        icon: (<AiOutlineFileDone />),
        label: 'Citas',
        destino: '/Appointments',
    },
    {
        icon: (<AiFillExperiment />),
        label: "Laboratorios",
        destino: "/HomeExam/laboratorios"
    }
];