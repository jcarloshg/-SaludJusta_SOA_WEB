
import { AiOutlineFileDone, AiFillExperiment } from "react-icons/ai";

export const ItemsMenu = [
    {
        icon: (<AiOutlineFileDone size={20} />),
        label: 'Citas',
        destino: '/HomeAppointments/',
    },
    {
        icon: (<AiFillExperiment size={20} />),
        label: "Laboratorios",
        destino: "/HomeAppointments/laboratorios"
    }
];