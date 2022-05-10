import { Row, Text } from '@nextui-org/react'
import { SecondaryButton } from '../../../../components'

function TableCell(row, columnKey, func = () => null) {
  const cellValue = row[columnKey]

  if (columnKey === 'accion') {
    return (
      <Row justify="center">
        <SecondaryButton func={() => func(cellValue)} text="Seleccionar" width="96px" />
      </Row>
    )
  }

  return (
    <Text size={16} css={{ tt: 'capitalize' }}>
      {cellValue}
    </Text>
  )
}

export default TableCell
