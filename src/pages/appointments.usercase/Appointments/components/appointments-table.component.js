import { Table, Text } from '@nextui-org/react';

function AppointmentsTable({ columns, list }) {
  return (
    <Table
      aria-label="Citas"
      css={{ minWidth: '100%', height: 'calc($space$14 * 12)' }}
      selectionMode="none"
      shadow
    >
      <Table.Header columns={columns}>
        {(column) => <Table.Column key={column.uid}>{column.name}</Table.Column>}
      </Table.Header>
      <Table.Body items={list}>
        {(item) => (
          <Table.Row key={item.name}>
            {(key) => (
              <Table.Cell>
                <Text size={16} css={{ tt: 'capitalize' }}>
                  {item[key]}
                </Text>
              </Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

export default AppointmentsTable;
