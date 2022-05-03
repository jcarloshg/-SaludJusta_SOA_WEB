import { Row, Text } from '@nextui-org/react';
import { SecondaryButton } from '../../../../components';

function tableCell(row, columnKey) {
  const cellValue = row[columnKey];

  if (columnKey === 'accion') {
    return (
      <Row justify="center">
        <SecondaryButton
          onClick={() => console.log('onClick not defined', cellValue)}
          text="Seleccionar"
          width="100px"
        />
      </Row>
    );
  }

  return (
    <Text size={16} css={{ tt: 'capitalize' }}>
      {cellValue}
    </Text>
  );
}

export default tableCell;