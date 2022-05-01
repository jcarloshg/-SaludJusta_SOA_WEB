import { Routes, Route } from "react-router-dom";
import './HomeExam.css';
import { ExamenesPendientes } from "../ExamenesPendientes/ExamenesPendientes";
import { Laboratorios } from "../Laboratorios/Laboratorios";
import { MenuLeft } from "../../../components/MenuLeft/MenuLeft";
import { ItemsMenu } from "./models/ItemsMenu";
import { RegistrarResultados } from "../RegistrarResultados/RegistrarResultados";

export function HomeExam(params) {

    return (
        <div className="border_generic container_menu_dashboard">

            <MenuLeft arrayItems={ItemsMenu} />

            <div className="border_generic dashboard" >
                <Routes>
                    <Route path="/" element={<ExamenesPendientes />} />
                    <Route path="*" element={<ExamenesPendientes />} />
                    <Route path="/examenesPendientes" element={<ExamenesPendientes />} />
                    <Route path="/laboratorios" element={<Laboratorios />} />
                    <Route path="/registrar_resultados" element={<RegistrarResultados />} />
                </Routes>
            </div>

        </div>
    );
}