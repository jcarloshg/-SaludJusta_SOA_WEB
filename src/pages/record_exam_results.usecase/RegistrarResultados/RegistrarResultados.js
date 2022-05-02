
import React from "react"
import { Title } from "../../../components"
import { useRegistrarResultados } from "./useRegistrarResultados"
import './RegistrarResultados.css';
import { Spacer, Text } from "@nextui-org/react";

export const RegistrarResultados = () => {

    const {
        appointment,
    } = useRegistrarResultados();

    /**
     *
     * @param {string} label
     * @param {string} data
     * @returns
     */
    const renderData = (label, data) => {
        return (
            <div className="renderData">
                <Text b size={14} css={{ tt: "capitalize" }}>{label}</Text>
                <Text size={14} css={{ tt: "capitalize" }}>{data}</Text>
            </div>
        );
    }

    return (
        <>
            <Title text="Registrar Resultados" />

            <Spacer y={1} />
            <div className="box_info">

                <div className="border_generic box_info_person">
                    <Text b size={18} css={{ tt: "capitalize" }}>Datos personales</Text>
                </div>

                <div className="border_generic box_info_appointment">
                    <Text b size={18} css={{ tt: "capitalize" }}>Fecha & hora</Text>
                </div>

            </div>

            <p>{JSON.stringify(appointment, null, 2)}</p>
        </>
    )
}