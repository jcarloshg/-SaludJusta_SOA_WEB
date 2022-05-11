import { Modal, Button, Row } from '@nextui-org/react'
import { Subtitle, Title } from '../../../../components'

function ModalConfirm({ open = false, onClose = () => null }) {
  return (
    <Modal closeButton blur aria-labelledby="modal-title" open={open} onClose={onClose}>
      <Modal.Header>
        <Row>
          <Title>Confirmación</Title>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Subtitle>¿Desea seleccionar una cita de _ en el horario _ el _?</Subtitle>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={onClose}>
          Cancelar
        </Button>
        <Button auto onClick={onClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalConfirm
