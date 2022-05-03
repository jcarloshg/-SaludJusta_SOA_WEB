import { Modal, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { MainButton, SecondaryButton } from '../../../../../components'
import User from '../../../../../models/User.entitie';
import { dateToString, hhmmssToString, timeToString } from '../../../../../utilities/date';

export const ModalInfoAppointment = ({
    visible = false,
    onClose = null,
    user = new User({}),
    func_SecondaryButton = null,
    func_MainButton = null,
}) => {

    const exacuteOnClose = () => {
        try {
            onClose()
        } catch (error) {
            console.log(error);
        }
    }

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
        <Modal
            closeButton
            animated={false}
            aria-labelledby="modal-title"
            open={visible}
            onClose={() => exacuteOnClose()}
        >

            <Modal.Header>
                <Text id="modal-title" size={18}>Informacion de la cita</Text>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Text b size={18} >Datos personales</Text>
                    {renderData('Nombre(s):', `${user.name}`)}
                    {renderData('Apellidos(s):', `${user.lastName}`)}
                    {renderData('Genero:', `${user.gender}`)}
                    {/*
                    <Spacer y={1} />
                    <Text b size={18} >Datos de contacto</Text>
                    {renderData('Numero de telefono:', `${user.phoneNumber}`)}
                    {renderData('Correo electronico:', `${user.email}`)} */}

                    <Spacer y={1} />
                    <Text b size={18} >Datos de la cita</Text>
                    {
                        (user.appointments.length > 0) && (
                            <>
                                {renderData('Fecha:', `${dateToString(new Date(user.appointments[0].date))}`)}
                                {renderData('Hora:', `${timeToString(hhmmssToString(user.appointments[0].time))}`)}
                                {renderData('Tipo de examen:', `${user.appointments[0].exam.examCatalogItem.typeExam}`)}
                                {renderData('ESTATUS:', `${user.appointments[0].status}`)}
                            </>
                        )
                    }
                </div>
            </Modal.Body>

            <Modal.Footer>
                {func_SecondaryButton &&
                    <SecondaryButton
                        func={func_SecondaryButton}
                        width={100}
                        text="Cancelar" />}

                {func_MainButton &&
                    <MainButton
                        func={func_MainButton}
                        width={100}>Poner en curso</MainButton>}
            </Modal.Footer>

        </Modal>
    )
}
