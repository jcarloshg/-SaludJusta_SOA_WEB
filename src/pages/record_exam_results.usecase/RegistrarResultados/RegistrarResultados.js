
import React from "react"
import { MainButton, SecondaryButton } from "../../../components"
import Title from '../../../components/title.component'
import { useRegistrarResultados } from "./useRegistrarResultados"
import './RegistrarResultados.css';
import { Spacer, Text, Textarea } from "@nextui-org/react";
import { dateToString, hhmmssToString } from "../../../utilities/date";
import { timeToString } from "../../../utilities/date/timeToString";

export const RegistrarResultados = () => {

    const {
        user,
        bindings,
        saveResults, cancel
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
                    <Text b size={14} >{label}</Text>
                    <Spacer x={0.5} />
                    <Text size={14} >{data}</Text>
                </div>
            </>
        );
    }

    return (
        <div className="container">
            {/* <Title text="Registrar Resultados" /> */}
            <Spacer y={1.5} />

            <Title>Registrar resultados</Title>

            <Spacer y={1.5} />
            <div>
                <div className="box_info">
                    <div className="box_info_person">
                        <Text b size={18} >Datos personales</Text>
                        <Spacer y={0.5} />
                        {renderData('Nombre(s):', `${user.name}`)}
                        {renderData('Apellidos(s):', `${user.lastName}`)}
                        {renderData('Genero:', `${user.gender}`)}
                        {renderData('Edad:', `${user.age}`)}
                    </div>
                    <div className="box_info_appointment">
                        <Text b size={18} >Fecha y hora</Text>
                        <Spacer y={0.5} />
                        {
                            (user.appointments.length > 0) && (
                                <>
                                    {renderData('Fecha:', `${dateToString(new Date(user.appointments[0].date))}`)}
                                    {renderData('Hora:', `${timeToString(hhmmssToString(user.appointments[0].time))}`)}
                                </>
                            )
                        }
                    </div>
                </div>
                <Spacer y={1} />
                {
                    (user.appointments.length > 0) && (
                        <>
                            {renderData('Tipo de examen:', `${user.appointments[0].exam.examCatalogItem.typeExam}`)}
                        </>
                    )
                }
            </div>

            <Spacer y={1.5} />
            <Text b size={18} >Resultados del examen</Text>
            <Spacer y={0.5} />
            <Textarea
                {...bindings}
                bordered
                shadow={true}
                rows={10}
                label="Infresa los resultados obtenidos de las muestras"
                css={{ width: "100%" }}
            />

            <Spacer y={0.5} />
            <div className="buttons_actions">
                <SecondaryButton
                    text="Cancelar"
                    func={() => cancel()}
                />
                <MainButton func={() => saveResults()}>Guardar</MainButton>
            </div>

            {/* <p>{JSON.stringify(user, null, 2)}</p> */}
        </div>
    )
}