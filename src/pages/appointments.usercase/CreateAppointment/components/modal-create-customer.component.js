import { Button, Loading, Modal, Popover, Row, Text } from '@nextui-org/react'
import { Subtitle, Title } from '../../../../components'
import { RiErrorWarningFill } from 'react-icons/ri'
import modalButton from './modal-button.style'

function ModalCreateCustomer({
  open = false,
  onClose = () => null,
  labelButton = 'Siguiente',
  onClick = () => null,
  openPopover = false,
  onOpenChange = () => null,
  message = 'No dejes campos vacíos',
  loading = false,
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
        <Button
          flat
          auto
          css={{ backgroundColor: '$error', color: '$white' }}
          onClick={onClose}
          disabled={loading}
        >
          Cancelar
        </Button>
        <Popover placement="top" isOpen={openPopover} onOpenChange={onOpenChange}>
          <Popover.Trigger>
            <Button onClick={onClick} auto disabled={loading} css={modalButton}>
              {!loading ? (
                labelButton
              ) : (
                <Loading size="sm" type="spinner" color="white" />
              )}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Text css={{ px: '$4', py: '$4', fontSize: '0.875rem', color: '$error' }}>
              <RiErrorWarningFill size={14} />
              {` ${message}`}
            </Text>
          </Popover.Content>
        </Popover>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCreateCustomer
