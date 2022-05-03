import { Input, Spacer } from '@nextui-org/react';
import { MainButton, SecondaryButton, Subtitle, Title } from '../../../../components';

function SearchCustomer({ email = '', onChangeEmail, onSearchCustomer, onCreateCustomer }) {
  return (
    <article className="col full-width create-appointment-container">
      <Title>Crear Cita</Title>
      <Subtitle>Buscar cliente por correo</Subtitle>
      <Spacer y={1} />
      {/* <section className="row justify-flex-end"> */}
      {/* <SecondaryButton text="Crear nuevo" func={onCreateCustomer} width="500px" /> */}
      {/* <Spacer x={0.8} /> */}
      <div className="col center">
        <Input
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={onChangeEmail}
          autoComplete="off"
          bordered
          clearable
          color="primary"
          css={{ width: '330px' }}
        />
        <Spacer y={1} />
        <MainButton func={onSearchCustomer} width="330px">
          Buscar
        </MainButton>
        <Spacer y={0.5} />
        <SecondaryButton text="Crear nuevo cliente" func={onCreateCustomer} width="330px" />
      </div>
      {/* </section> */}
    </article>
  );
}

export default SearchCustomer;
