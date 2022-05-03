import { Modal, Text } from '@nextui-org/react'
import React from 'react'
import { MainButton, SecondaryButton } from '../../../../../components'

export const ModalInfoAppointment = () => {


    return (
        <Modal
            closeButton
            animated={false}
            aria-labelledby="modal-title"
            open={true}
            onClose={() => console.log("HOLA")}
        >

            <Modal.Header>
                <Text id="modal-title" size={18}>Informacion de la cita</Text>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <Text id="modal-title" size={18}>[CUERPO DEL MODAL]</Text>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <SecondaryButton width={100} text="Cancelar" />
                <MainButton width={100}>Poner en curso</MainButton>
            </Modal.Footer>

        </Modal>
    )
}
