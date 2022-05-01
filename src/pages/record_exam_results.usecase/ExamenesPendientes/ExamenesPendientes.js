import { Table, Text, Spacer } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { SecondaryButton, Title } from "../../../components";
import { useExamenesPendientes } from "./useExamenesPendientes";

export const ExamenesPendientes = () => {

    const navigate = useNavigate();

    const {
        examsArryViewObject
    } = useExamenesPendientes();

    const columns_customTable = [
        { name: "Nombre Cliente", uid: "nameClient" },
        { name: "Tipo examen", uid: "typeExam" },
        { name: "Hora", uid: "hour" },
        { name: "Estatus", uid: "status" },
        { name: "accion", uid: "action" },
    ];

    const render_customTable = (exam, columnKey) => {
        const cellValue = exam[columnKey];
        switch (columnKey) {
            case "nameClient": return (<Text size={14} css={{ tt: "capitalize" }}> {cellValue} </Text>)
            case "typeExam": return (<Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
            case "hour": return (<Text size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
            case "status": return (<Text size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
            case "action": return (
                <SecondaryButton
                    func={() => navigate("/HomeExam/registrar_resultados")}
                    text="registrar resultados"
                />
            )
            // default: return cellValue;
        }
    }

    return (
        <>
            <Title text="Examenes pendientes" />

            <Spacer y={1} x={2} />
            <Table
                aria-label="Examenes pendientes"
                css={{ height: "auto", minWidth: "100%", }}
                selectionMode="none"
            >

                <Table.Header columns={columns_customTable}>
                    {(column) => (<Table.Column key={column.uid}>{column.name}</Table.Column>)}
                </Table.Header>

                <Table.Body items={examsArryViewObject}>
                    {(item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{render_customTable(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    )
                    }
                </Table.Body>

            </Table>
        </>
    );
}
