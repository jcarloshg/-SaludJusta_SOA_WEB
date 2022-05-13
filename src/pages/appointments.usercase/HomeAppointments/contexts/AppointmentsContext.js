import { createContext, useReducer } from 'react'
import { validateEmail } from '../../../../utilities'
import { existAccount } from '../../CreateAppointment/services/requests'
import { contextActions as actions, contextReducer as reducer, initialContext } from '../reducers'

const AppointmentsContext = createContext()

const AppointmentsProvider = ({ children }) => {
  const [ctxState, dispatch] = useReducer(reducer, initialContext)

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
    if (email === '') return onError('Por favor ingrese un correo electrónico')
    if (!validateEmail(email)) return onError('Correo electrónico inválido')

    const res = await existAccount(email)
    if (res === null) return onError(`El correo electrónico "${email}" no fue encontrado`)

    onSetIdUser(res.data.idUser)
    goToSelectAppt()
  }

  const onCustomerCreated = () => {
    onChangeInfoMsg('Usuario creado correctamente')
    onShowInfo()
  }

  const onApptSelected = (exam = '', time = '', date = '') => {
    const msg = `Cita seleccionada: ${exam} a las ${time} hrs. el ${date}`
    onChangeInfoMsg(msg)
    onShowInfo()
  }

  return (
    <AppointmentsContext.Provider
      value={{
        ctxState,
        onShowCreateCust,
        onHideCreateCust,
        onShowInfo,
        onHideInfo,
        goToSearchCust,
        onSearchCustomer,
        onSetIdExamCtlg,
        onSetIdAppt,
        onClear,
        onCustomerCreated,
        onApptSelected,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}

export { AppointmentsContext, AppointmentsProvider }
