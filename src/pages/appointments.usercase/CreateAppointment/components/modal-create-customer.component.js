import { Button, Modal, Row } from '@nextui-org/react';
import { Subtitle, Title } from '../../../../components';

function ModalCreateCustomer({
  open = false,
  onClose = () => null,
  labelButton = 'Siguiente',
  onClick = () => null,
  children,
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
        <Row wrap="wrap">
          <Title>Crear nuevo usuario</Title>
          <Subtitle>Ingresa los datos solicitados</Subtitle>
        </Row>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button flat color="error" onClick={onClose} auto>
          Cancelar
        </Button>
        <Button onClick={onClick} auto>
          {labelButton}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCreateCustomer;
