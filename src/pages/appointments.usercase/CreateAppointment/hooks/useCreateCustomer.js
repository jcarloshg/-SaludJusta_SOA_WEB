import { useContext, useReducer } from 'react'
import initialUser from '../models/initial-user'
import userReducer from '../reducers/userReducer'
import { createAccount } from '../services'
import actions from '../models/user-actions'
import { AppointmentsContext } from '../../HomeAppointments/contexts/AppointmentsContext'

function useCreateCustomer(closeHandler = () => null) {
  const { setInfoMessage, onInfoShow, goToSelectAppointment } =
    useContext(AppointmentsContext)
  const [user, dispatch] = useReducer(userReducer, initialUser)

  const userDispatch = (type = '', payload = null) => dispatch({ type, payload })
  const onChangeName = e => userDispatch(actions.onChangeName, e.target.value)
  const onChangeLastName = e => userDispatch(actions.onChangeLastName, e.target.value)
  const onChangeAge = e => userDispatch(actions.onChangeAge, e.target.value)
  const onChangeGender = e => userDispatch(actions.onChangeGender, e.target.value)
  const onChangeEmail = e => userDispatch(actions.onChangeEmail, e.target.value)
  const onChangePhone = e => userDispatch(actions.onChangePhone, e.target.value)
  const onNextStep = () => dispatch({ type: actions.onNextStep })
  const onPreviusStep = () => dispatch({ type: actions.onPreviusStep })
  const onOpenPopover = () => dispatch({ type: actions.onOpenPopover })
  const onClosePopover = () => dispatch({ type: actions.onClosePopover })
  const onLoading = () => dispatch({ type: actions.onLoading })
  const onStopLoading = () => dispatch({ type: actions.onStopLoading })
  const onChangeMessage = (msg = '') => userDispatch(actions.onChangeMessage, msg)
  const onEmptyFieldsMsg = () => onChangeMessage('No dejes campos vacíos')
  const onErrorMessage = () => onChangeMessage('Error al crear el usuario')
  const onClear = () => dispatch({ type: actions.onClear })

  const goToNextStep = () => {
    if (user.name === '' || user.lastName === '' || user.age < 18) {
      onEmptyFieldsMsg()
      onOpenPopover()
      return
    }
    onNextStep()
  }

  const createCustomer = async () => {
    onLoading()
    const res = await createAccount(user)
    if (res === null) {
      onErrorMessage()
      onStopLoading()
      onOpenPopover()
      return
    }
    console.log('createCustomer', res)
    onStopLoading()
    onClear()
    closeHandler()
    setInfoMessage('Usuario creado correctamente')
    onInfoShow()
    goToSelectAppointment()
  }

  const onSaveCustomer = async () => {
    if (user.email === '' || user.phone === '') {
      onEmptyFieldsMsg()
      onOpenPopover()
      return
    }
    await createCustomer()
  }

  const onOpenPopoverChange = () => {
    if (user.popover) onClosePopover()
  }

  const onCancel = () => {
    onClear()
    closeHandler()
  }

  return {
    user,
    onChangeName,
    onChangeLastName,
    onChangeAge,
    onChangeGender,
    onChangeEmail,
    onChangePhone,
    onPreviusStep,
    goToNextStep,
    onSaveCustomer,
    onOpenPopoverChange,
    onCancel,
  }
}

export default useCreateCustomer
