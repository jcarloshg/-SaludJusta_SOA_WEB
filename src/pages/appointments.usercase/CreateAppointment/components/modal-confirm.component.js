import { Modal, Button, Row } from '@nextui-org/react'
import { Subtitle, Title } from '../../../../components'
import { errorButton } from './styles'

function ModalConfirm({
  open = false,
  loading = false,
  onClose = () => null,
  onConfirm = () => null,
  typeExam = '_',
  date = '_',
  time = '_',
}) {
  return (
    <Modal
      closeButton
      preventClose
      blur
      aria-labelledby="modal-title"
      open={open}
      onClose={onClose}
    >
      <Modal.Header>
        <Row>
          <Title>Confirmación</Title>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Subtitle>
          {`¿Desea seleccionar una cita de ${typeExam} a las ${time} hrs. el ${date}?`}
        </Subtitle>
      </Modal.Body>
      <Modal.Footer>
        <Button flat auto css={errorButton} onClick={onClose} disabled={loading}>
          Cancelar
        </Button>
        <Button auto onClick={onConfirm} disabled={loading}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalConfirm
