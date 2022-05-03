
import { Table, Text } from '@nextui-org/react';
import { SecondaryButton } from '../../../../components';

function AppointmentsTable({
	columns,
	list,
	func_SecondaryButton = null
}) {

	const render_customTable = (exam, columnKey) => {
		const cellValue = exam[columnKey];
		switch (columnKey) {
			case "idAppointment": return (<Text size={14} css={{ tt: "capitalize" }}> {cellValue} </Text>)
			case "nameClient": return (<Text b size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
			case "typeExam": return (<Text size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
			case "status": return (<Text size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
			case "hour": return (<Text size={14} css={{ tt: "capitalize" }}>{cellValue}</Text>)
			case "action": return (
				<SecondaryButton
					func={() => func_SecondaryButton(exam.idAppointment)}
					text="Ver cita"
				/>
			)
			default: return cellValue;
		}
	}

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
					<Table.Row>
						{(columnKey) => (
							<Table.Cell>{render_customTable(item, columnKey)}</Table.Cell>
						)}
					</Table.Row>
				)}
			</Table.Body>
		</Table>
	);
}

export default AppointmentsTable;
