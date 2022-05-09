import { Table, Text } from '@nextui-org/react'
import tableCell from './table-cell.component'

function AvailableAppointments({ list }) {
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
            <Table.Column
              key={column.uid}
              align={column.uid === 'accion' ? 'center' : 'start'}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={list}>
          {item => (
            <Table.Row>
              {columnKey => <Table.Cell>{tableCell(item, columnKey)}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      {list.length === 0 && (
        <Text size={16} color="#028174" weight="medium">
          No hay citas disponibles :c
        </Text>
      )}
    </>
  )
}

export default AvailableAppointments
