import { Subtitle, Title } from "../../../components";
import './HomeExam.css';

export function HomeExam(params) {

    return (
        <div>
            <div className="border_generic" style={{ height: '8vh' }}>
                <p>[TOOL_BAR]</p>
            </div>

            <div className="border_generic container_menu_dashboard">

                <div className="border_generic menu_left">
                    <Subtitle text="Menú" />
                </div>

                <div className="border_generic dashboard" >
                    <Title text="Examenes pendientes" />
                </div>

            </div>

        </div>
    );
}