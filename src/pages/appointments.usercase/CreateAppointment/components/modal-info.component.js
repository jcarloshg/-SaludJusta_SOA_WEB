import { Modal, Button, Row } from '@nextui-org/react'
import { Subtitle, Title } from '../../../../components'

function ModalInfo({ message = '', open = false, onClose = () => null }) {
  return (
    <Modal closeButton blur aria-labelledby="modal-title" open={open} onClose={onClose}>
      <Modal.Header>
        <Row>
          <Title>Información</Title>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Subtitle>{message}</Subtitle>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={onClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInfo
