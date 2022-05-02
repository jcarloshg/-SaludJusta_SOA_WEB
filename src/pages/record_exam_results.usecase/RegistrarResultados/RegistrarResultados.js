
import React from "react"
import { Title } from "../../../components"
import { useRegistrarResultados } from "./useRegistrarResultados"
import './RegistrarResultados.css';
import { Spacer, Text } from "@nextui-org/react";
import { dateToString } from "../../../utilities/date";
import { timeToString } from "../../../utilities/date/timeToString";

export const RegistrarResultados = () => {

    const {
        user,
    } = useRegistrarResultados();

    /**
     *
     * @param {string} label
     * @param {string} data
     * @returns
     */
    const renderData = (label, data) => {
        return (
            <>
                <Spacer y={0.3} />
                <div className="renderData">
                    <Text b size={14} css={{ tt: "capitalize" }}>{label}</Text>
                    <Spacer x={0.5} />
                    <Text size={14} css={{ tt: "capitalize" }}>{data}</Text>
                </div>
            </>
        );
    }

    return (
        <>
            <Title text="Registrar Resultados" />

            <Spacer y={1} />
            <div className="box_info">

                <div className="border_generic box_info_person">
                    <Text b size={18} css={{ tt: "capitalize" }}>Datos personales</Text>
                    <Spacer y={0.5} />
                    {renderData('Nombre(s):', `${user.name}`)}
                    {renderData('Apellidos(s):', `${user.lastName}`)}
                    {renderData('Genero:', `${user.gender}`)}
                </div>

                <div className="border_generic box_info_appointment">
                    <Text b size={18} css={{ tt: "capitalize" }}>Fecha & hora</Text>
                    <Spacer y={0.5} />
                    {
                        (user.appointments.length > 0) && (
                            <>
                                {renderData('Fecha:', `${dateToString(new Date(user.appointments[0].date))}`)}
                                {renderData('Hora:', `${timeToString(Date.parse(user.appointments[0].time))}`)}
                            </>
                        )
                    }
                </div>

            </div>

            <p>{JSON.stringify(user, null, 2)}</p>
        </>
    )
}