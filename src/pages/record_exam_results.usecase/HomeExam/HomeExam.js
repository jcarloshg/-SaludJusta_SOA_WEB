import { MainButton, Subtitle } from "../../../components";
import { Routes, Route } from "react-router-dom";
import './HomeExam.css';
import { ExamenesPendientes } from "../ExamenesPendientes/ExamenesPendientes";
import { Laboratorios } from "../Laboratorios/Laboratorios";
import { useNavigate } from "react-router-dom"

export function HomeExam(params) {

    const navigate = useNavigate();

    const navigateToexamenesPendientes = () => navigate('/HomeExam/examenesPendientes');
    const navigateToLaboratorios = () => navigate('/HomeExam/laboratorios');

    return (
        <div>
            <div className="border_generic" style={{ height: '8vh', display: "flex", flexDirection: "row" }}>
                <p>[TOOL_BAR]</p>

                <MainButton
                    func={() => navigateToexamenesPendientes()} text="examenesPendientes"
                />

                <MainButton
                    func={() => navigateToLaboratorios()} text="Iniciar sesión"
                />
            </div>

            <div className="border_generic container_menu_dashboard">

                <div className="border_generic menu_left">
                    <Subtitle text="Menú" />
                </div>

                <div className="border_generic dashboard" >
                    <Routes>
                        <Route path="/" element={<ExamenesPendientes />} />
                        <Route path="*" element={<ExamenesPendientes />} />
                        <Route path="/examenesPendientes" element={<ExamenesPendientes />} />
                        <Route path="/laboratorios" element={<Laboratorios />} />
                    </Routes>
                </div>

            </div>

        </div>
    );
}