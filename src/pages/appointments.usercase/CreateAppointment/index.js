import { useContext } from 'react'
import CreateCustomer from './CreateCustomer'
import SearchCustomer from './SearchCustomer'
import SelectAppointment from './SelectAppointment'
import { AppointmentsContext } from '../HomeAppointments/contexts/AppointmentsContext'
import { ModalInfo } from './components'
import './CreateAppointment.css'

function CreateAppointment() {
  const { ctxState, onHideCreateCust, onHideInfo, goToSearchCust } =
    useContext(AppointmentsContext)

  return (
    <>
      <main className="row create-appointment-main">
        {ctxState.screen === 'SearchCustomer' && <SearchCustomer />}
        {ctxState.screen === 'SelectAppointment' && (
          <SelectAppointment goToSearchCust={goToSearchCust} />
        )}
      </main>
      <CreateCustomer visible={ctxState.createCustVisible} closeHandler={onHideCreateCust} />
      <ModalInfo
        message={ctxState.infoMessage}
        open={ctxState.infoVisible}
        onClose={onHideInfo}
      />
    </>
  )
}

export default CreateAppointment
