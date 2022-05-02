import { AiFillSnippets, AiFillExperiment } from "react-icons/ai";

export const ItemsMenu = [
    {
        icon: (<AiFillSnippets />),
        label: "Exmenes pendientes",
        destino: "/HomeExam/examenesPendientes"
    },
    {
        icon: (<AiFillExperiment />),
        label: "Laboratorios",
        destino: "/HomeExam/laboratorios"
    }
];