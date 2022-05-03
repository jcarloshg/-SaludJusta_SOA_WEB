
import React from 'react'
import { Modal, Text } from '@nextui-org/react'
import MainButton from '../main-button.component'

export const ModalAlert = ({
    visible = true,
    func_MainButton = null,
    title = null,
    message = null,
}) => {
    return (
        <Modal
            closeButton
            animated={false}
            aria-labelledby="modal-title"
            open={visible}
        >

            <Modal.Header>
                {
                    title && <Text id="modal-title" size={18}>{title}</Text>
                }
            </Modal.Header>

            <Modal.Body>
                {
                    message && <Text id="modal-title" size={18}>{message}</Text>
                }
            </Modal.Body>



            <Modal.Footer>
                {func_MainButton &&
                    <MainButton
                        func={func_MainButton}
                        width={100}>Aceptar</MainButton>
                }
            </Modal.Footer>

        </Modal>

    )
}
