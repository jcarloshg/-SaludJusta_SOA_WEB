import { createContext, useReducer } from 'react'
import { existAccount } from '../../CreateAppointment/services'
import {
  appointmentsActions as actions,
  appointmentsReducer as reducer,
  initialAppointments,
} from '../reducers'

const AppointmentsContext = createContext()

const AppointmentsProvider = ({ children }) => {
  const [ctxState, dispatch] = useReducer(reducer, initialAppointments)

  const dispatchState = (type = '', payload = null) => dispatch({ type, payload })
  const goToSearchCust = () => dispatch({ type: actions.onGoToSearchCust })
  const goToSelectAppt = () => dispatch({ type: actions.onGoToSelectAppt })
  const onShowCreateCust = () => dispatch({ type: actions.onShowCreateCust })
  const onHideCreateCust = () => dispatch({ type: actions.onHideCreateCust })
  const onShowInfo = () => dispatch({ type: actions.onShowInfo })
  const onHideInfo = () => dispatch({ type: actions.onHideInfo })
  const onLoading = () => dispatch({ type: actions.onLoading })
  const onChangeInfoMsg = (msg = '') => dispatchState(actions.onChangeInfoMsg, msg)
  const onError = (msg = '') => dispatchState(actions.onError, msg)
  const onClear = () => dispatch({ type: actions.onClear })
  const onSetIdUser = (id = '') => dispatchState(actions.onSetIdUser, id)
  const onSetIdExamCtlg = (id = '') => dispatchState(actions.onSetIdExamCtlg, id)
  const onSetIdAppt = (id = '') => dispatchState(actions.onSetIdAppt, id)

  const onSearchCustomer = async (email = '') => {
    onLoading()

    if (email === '') {
      onError('Por favor ingrese un correo electrónico')
      return
    }

    const res = await existAccount(email)

    if (res === null) {
      onError('El correo electrónico no existe')
      return
    }

    onSetIdUser(res.data.idUser)
    goToSelectAppt()
  }

  return (
    <AppointmentsContext.Provider
      value={{
        ctxState,
        onShowCreateCust,
        onHideCreateCust,
        onShowInfo,
        onHideInfo,
        onChangeInfoMsg,
        goToSearchCust,
        goToSelectAppt,
        onSearchCustomer,
        onSetIdExamCtlg,
        onSetIdAppt,
        onClear,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}

export { AppointmentsContext, AppointmentsProvider }
