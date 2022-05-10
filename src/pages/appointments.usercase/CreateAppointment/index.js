import { useContext } from 'react'
import CreateCustomer from './CreateCustomer'
import SearchCustomer from './SearchCustomer'
import SelectAppointment from './SelectAppointment'
import { AppointmentsContext } from '../HomeAppointments/contexts/AppointmentsContext'
import { ModalInfo } from './components'
import './CreateAppointment.css'

function CreateAppointment() {
  const { commonState, onHideCreateCustomer, onHideInfo } =
    useContext(AppointmentsContext)

  return (
    <>
      <main className="row create-appointment-main">
        {commonState.currentScreen === 'SearchCustomer' && <SearchCustomer />}
        {commonState.currentScreen === 'SelectAppointment' && <SelectAppointment />}
      </main>
      <CreateCustomer
        visible={commonState.CreateCustomerVisible}
        closeHandler={onHideCreateCustomer}
      />
      <ModalInfo
        message={commonState.infoMessage}
        open={commonState.infoVisible}
        onClose={onHideInfo}
      />
    </>
  )
}

export default CreateAppointment
