import { Row, Spacer, Table, Text } from '@nextui-org/react'
import tableCell from './table-cell.component'
import { FcHighPriority } from 'react-icons/fc'

function AvailableAppointments({ list, func = () => null }) {
  const columns = [
    { name: 'Fecha', uid: 'date' },
    { name: 'Hora', uid: 'time' },
    { name: 'Estado', uid: 'status' },
    { name: 'Accion', uid: 'accion' },
  ]

  return (
    <>
      <Table
        aria-label="Citas"
        css={{ height: 'auto', minWidth: '40rem', zIndex: '1' }}
        selectionMode="none"
        shadow
        // striped
      >
        <Table.Header columns={columns}>
          {column => (
            <Table.Column key={column.uid} align={column.uid === 'accion' ? 'center' : 'start'}>
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={list}>
          {item => (
            <Table.Row>
              {columnKey => <Table.Cell>{tableCell(item, columnKey, func)}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Spacer y={0.8} />
      {list.length === 0 && (
        <Row justify="center">
          <FcHighPriority />
          <Spacer x={0.5} />
          <Text size={16} weight="medium">
            No hay citas disponibles
          </Text>
        </Row>
      )}
    </>
  )
}

export default AvailableAppointments
