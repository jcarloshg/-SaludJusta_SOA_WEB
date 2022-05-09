import { useContext } from 'react'
import CreateCustomer from './CreateCustomer'
import SearchCustomer from './SearchCustomer'
import SelectAppointment from './SelectAppointment'
import { AppointmentsContext } from '../HomeAppointments/contexts/AppointmentsContext'
import './CreateAppointment.css'
import { ModalInfo } from './components'

function CreateAppointment() {
  const {
    currentScreen,
    createCustomerVisible,
    infoVisible,
    infoMessage,
    onCreateCustomerHide,
    onInfoHide,
  } = useContext(AppointmentsContext)

  return (
    <>
      <main className="row create-appointment-main">
        {currentScreen === 'SearchCustomer' && <SearchCustomer />}
        {currentScreen === 'SelectAppointment' && <SelectAppointment />}
      </main>
      <CreateCustomer
        visible={createCustomerVisible}
        closeHandler={onCreateCustomerHide}
      />
      <ModalInfo message={infoMessage} open={infoVisible} onClose={onInfoHide} />
    </>
  )
}

export default CreateAppointment
