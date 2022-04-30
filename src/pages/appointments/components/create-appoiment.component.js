import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react';

function CreateAppoiment({ visible = false, closeHandler }) {
  return (
    <Modal
      closeButton
      preventClose
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Crea una &nbsp;
          <Text b size={18}>
            Cita
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text size={18}>Datos personales</Text>
        <Input
          clearable
          bordered
          fullWidth
          label="Nombre"
          color="primary"
          size="lg"
          placeholder="p.ej Luis"
        />
        <Input
          clearable
          bordered
          fullWidth
          label="Apellidos"
          color="primary"
          size="lg"
          placeholder="p.ej Perez"
        />
        <Text color="primary">Edad</Text>
        <Text color="secondary">5 agnios</Text>
        <Text size={18}>Fecha y hora</Text>
        <Input clearable bordered fullWidth label="Fecha" type="date" />
        <Input clearable bordered fullWidth label="Hora" type="time" />
        <Text color="primary">Tipo de examen</Text>
        <Text color="secondary">Sangre</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={closeHandler}>
          Guardar cita
        </Button>
        <Button auto flat color="error" onClick={closeHandler}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateAppoiment;
