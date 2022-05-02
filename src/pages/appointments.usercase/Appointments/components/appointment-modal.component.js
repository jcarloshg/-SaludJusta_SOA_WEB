import { Modal, Row } from '@nextui-org/react';
import { ErrorButton, MainButton, Title } from '../../../../components';
import './appointment-modal.css';

function AppointmentModal({ open, onClose, onSave, title, children }) {
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
          <Title>{title}</Title>
        </Row>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Row justify="space-between" wrap="no-wrap">
          <MainButton width="48%" func={onSave}>
            Guardar cita
          </MainButton>
          <ErrorButton width="48%" onClick={onClose}>
            Cancelar
          </ErrorButton>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export default AppointmentModal;
