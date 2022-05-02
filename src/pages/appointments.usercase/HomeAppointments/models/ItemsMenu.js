
import { AiOutlineFileDone, AiFillExperiment } from "react-icons/ai";

export const ItemsMenu = [
    {
        icon: (<AiOutlineFileDone />),
        label: 'Citas',
        destino: '/HomeAppointments/',
    },
    {
        icon: (<AiFillExperiment />),
        label: "Laboratorios",
        destino: "/HomeAppointments/laboratorios"
    }
];