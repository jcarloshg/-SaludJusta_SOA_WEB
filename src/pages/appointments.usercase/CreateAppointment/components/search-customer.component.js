import { Input, Spacer } from '@nextui-org/react';
import { MainButton, SecondaryButton, Subtitle, Title } from '../../../../components';

function SearchCustomer({ email = '', onChangeEmail, onSearchCustomer, onCreateCustomer }) {
  return (
    <article className="col full-width create-appointment-container">
      <Title>Crear Cita</Title>
      <Spacer y={0.4} />
      <Subtitle>Buscar cliente por correo</Subtitle>
      <Spacer y={1.2} />
      <Input
        label="Correo"
        placeholder="correo@ejemplo.com"
        value={email}
        onChange={onChangeEmail}
        autoComplete="off"
        bordered
        clearable
        color="primary"
      />
      <Spacer y={1.6} />
      <section className="row justify-flex-end">
        <SecondaryButton text="Crear nuevo" func={onCreateCustomer} />
        <Spacer x={0.8} />
        <MainButton func={onSearchCustomer}>Buscar</MainButton>
      </section>
    </article>
  );
}

export default SearchCustomer;
