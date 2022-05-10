import { createContext, useReducer } from 'react'
import { existAccount } from '../../CreateAppointment/services'
import { appointmentsActions as actions, initialAppointments } from '../models'
import appointmentsReducer from '../reducers/appointmentsReducer'

const AppointmentsContext = createContext()

const AppointmentsProvider = ({ children }) => {
  const [commonState, dispatch] = useReducer(appointmentsReducer, initialAppointments)

  const dispatchState = (type, payload) => dispatch({ type, payload })
  const onChangeEmail = e => dispatchState(actions.onChangeEmail, e.target.value)
  const goToSearchCustomer = () => dispatch({ type: actions.onGoToSearchCustomer })
  const goToSelectAppointment = () => dispatch({ type: actions.onGoToSelectAppointment })
  const onShowCreateCustomer = () => dispatch({ type: actions.onShowCreateCustomer })
  const onHideCreateCustomer = () => dispatch({ type: actions.onHideCreateCustomer })
  const onShowInfo = () => dispatch({ type: actions.onShowInfo })
  const onHideInfo = () => dispatch({ type: actions.onHideInfo })
  const onLoading = () => dispatch({ type: actions.onLoading })
  const onError = msg => dispatchState(actions.onError, msg)
  const onClear = () => dispatch({ type: actions.onClear })
  const onSetIdUser = value => dispatchState(actions.onSetIdUser, value)
  const onSetIdExamCatalog = value => dispatchState(actions.onSetIdExamCatalog, value)
  const onSetIdAppointment = value => dispatchState(actions.onSetIdAppointment, value)

  const onSearchCustomer = async () => {
    onLoading()

    if (commonState.email === '') {
      onError('Por favor ingrese un correo electrónico')
      return
    }

    const res = await existAccount(commonState.email)

    if (res === null) {
      onError('El correo electrónico no existe')
      return
    }

    goToSelectAppointment()
  }

  return (
    <AppointmentsContext.Provider
      value={{
        commonState,
        onChangeEmail,
        onShowCreateCustomer,
        onHideCreateCustomer,
        onShowInfo,
        onHideInfo,
        goToSearchCustomer,
        goToSelectAppointment,
        onSearchCustomer,
        onSetIdUser,
        onSetIdExamCatalog,
        onSetIdAppointment,
        onClear,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}

export { AppointmentsContext, AppointmentsProvider }
