import { Button, Loading, Spacer } from '@nextui-org/react'
import { useContext, useState } from 'react'
import { Subtitle, Title } from '../../../components'
import { AppointmentsContext as context } from '../HomeAppointments/contexts/AppointmentsContext'
import { createCustomerButton, searchButton } from './components'
import { InputEmail } from './components/Input'

function SearchCustomer() {
  const { ctxState, onShowCreateCust, onSearchCustomer } = useContext(context)

  const [email, setEmail] = useState('')
  const onChangeEmail = e => setEmail(e.target.value)

  const onSearch = async () => {
    await onSearchCustomer(email)
  }

  return (
    <article className="col full-width create-appointment-container">
      <Title>Crear Cita</Title>
      <Subtitle>Buscar cliente por correo</Subtitle>
      <Spacer y={1} />
      <div className="col center">
        <InputEmail
          email={email}
          setEmail={onChangeEmail}
          fullWidth={false}
          disabled={ctxState.loading}
        />
        <Spacer y={1.6} />
        <Button auto onClick={onSearch} disabled={ctxState.loading} css={searchButton}>
          {!ctxState.loading ? (
            'Buscar'
          ) : (
            <Loading size="sm" type="spinner" color="white" />
          )}
        </Button>
        <Spacer y={0.5} />
        <Button
          auto
          onClick={onShowCreateCust}
          disabled={ctxState.loading}
          css={createCustomerButton}
        >
          Crear nuevo cliente
        </Button>
      </div>
    </article>
  )
}

export default SearchCustomer
