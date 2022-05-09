import { Button, Input, Loading, Spacer } from '@nextui-org/react'
import { useContext } from 'react'
import { Subtitle, Title } from '../../../components'
import { AppointmentsContext } from '../HomeAppointments/contexts/AppointmentsContext'
import { createCustomerButton, searchButton } from './components'

function SearchCustomer() {
  const { email, loading, onChangeEmail, onCreateCustomerShow, onSearchCustomer } =
    useContext(AppointmentsContext)

  return (
    <article className="col full-width create-appointment-container">
      <Title>Crear Cita</Title>
      <Subtitle>Buscar cliente por correo</Subtitle>
      <Spacer y={1} />
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
        <Button onClick={onSearchCustomer} auto disabled={loading} css={searchButton}>
          {!loading ? 'Buscar' : <Loading size="sm" type="spinner" color="white" />}
        </Button>
        <Spacer y={0.5} />
        <Button
          onClick={onCreateCustomerShow}
          auto
          disabled={loading}
          css={createCustomerButton}
        >
          Crear nuevo cliente
        </Button>
      </div>
    </article>
  )
}

export default SearchCustomer
