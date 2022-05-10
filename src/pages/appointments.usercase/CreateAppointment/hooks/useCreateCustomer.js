import { useContext, useReducer } from 'react'
import { createAccount } from '../services'
import { AppointmentsContext as context } from '../../HomeAppointments/contexts/AppointmentsContext'
import { initialUser, userActions as actions, userReducer } from '../reducers'

function useCreateCustomer(closeHandler = () => null) {
  const { onChangeInfoMsg, onShowInfo, goToSelectAppt } = useContext(context)
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
  const onClosePopover = () => dispatch({ type: actions.onClosePopover })
  const onLoading = () => dispatch({ type: actions.onLoading })

  const onClear = () => dispatch({ type: actions.onClear })
  const onEmptyFields = () => dispatch({ type: actions.onEmptyFields })
  const onError = () => dispatch({ type: actions.onError })

  const goToNextStep = () => {
    if (user.name === '' || user.lastName === '' || user.age < 18) {
      onEmptyFields()
      return
    }
    onNextStep()
  }

  const createCustomer = async () => {
    onLoading()
    const res = await createAccount(user)
    if (res === null) {
      onError()
      return
    }
    console.log('createCustomer', res)

    onClear()
    closeHandler()

    onChangeInfoMsg('Usuario creado correctamente')
    onShowInfo()
    goToSelectAppt()
  }

  const onSaveCustomer = async () => {
    if (user.email === '' || user.phone === '') {
      onEmptyFields()
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
