import { useContext, useReducer } from 'react'
import { createAccount } from '../services'
import { AppointmentsContext as context } from '../../HomeAppointments/contexts/AppointmentsContext'
import { initialUser, userActions as actions, userReducer } from '../reducers'
import { validateEmail, validatePhone } from '../../../../utilities'

function useCreateCustomer(closeHandler = () => null) {
  const { onCustomerCreated } = useContext(context)
  const [user, dispatch] = useReducer(userReducer, initialUser)

  const userDispatch = (type = '', payload = null) => dispatch({ type, payload })

  const onChangeName = e => userDispatch(actions.onChangeName, e.target.value)
  const onChangeLastName = e => userDispatch(actions.onChangeLastName, e.target.value)
  const onChangeAge = e => userDispatch(actions.onChangeAge, e.target.value)
  const onChangeGender = e => userDispatch(actions.onChangeGender, e.target.value)
  const onChangeEmail = e => userDispatch(actions.onChangeEmail, e.target.value)
  const onChangePhone = e => {
    // Delete all non-numeric characters
    const value = e.target.value.replace(/\D/g, '')
    userDispatch(actions.onChangePhone, value)
  }

  const onNextStep = () => dispatch({ type: actions.onNextStep })
  const onPreviusStep = () => dispatch({ type: actions.onPreviusStep })
  const onClosePopover = () => dispatch({ type: actions.onClosePopover })
  const onLoading = () => dispatch({ type: actions.onLoading })

  const onClear = () => dispatch({ type: actions.onClear })
  const onEmptyFields = () => dispatch({ type: actions.onEmptyFields })
  const onError = () => dispatch({ type: actions.onError })
  const onEmailError = () => dispatch({ type: actions.onEmailError })
  const onPhoneError = () => dispatch({ type: actions.onPhoneError })

  const goToNextStep = () => {
    if (user.name === '' || user.lastName === '') return onEmptyFields()
    onNextStep()
  }

  const createCustomer = async () => {
    onLoading()

    const res = await createAccount(user)
    if (res === null) return onError()
    console.log('createCustomer', res)

    onClear()
    closeHandler()
    onCustomerCreated()
  }

  const onSaveCustomer = async () => {
    if (user.email === '' || user.phoneNumber === '') return onEmptyFields()
    if (!validateEmail(user.email)) return onEmailError()
    if (!validatePhone(user.phoneNumber)) return onPhoneError()
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
