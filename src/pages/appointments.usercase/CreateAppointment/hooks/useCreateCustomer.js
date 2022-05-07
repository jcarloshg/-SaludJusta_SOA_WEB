import { useReducer } from 'react'
import initialUser from '../models/initial-user'
import userReducer from '../reducers/userReducer'
import { createAccount } from '../services'
import actions from '../models/user-actions'

function useCreateCustomer(closeHandler = () => null) {
  const [user, dispatch] = useReducer(userReducer, initialUser)

  const userDispatch = (type, payload) => dispatch({ type, payload })
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

  const goToNextStep = () => {
    if (user.name === '' || user.lastName === '' || user.age < 18) {
      onOpenPopover()
      return
    }
    console.log('goToNextStep', user)
    onNextStep()
  }

  const createCustomer = async () => {
    const res = await createAccount(user)
    console.log('res', res)
  }

  const onSaveCustomer = async () => {
    if (user.email === '' || user.phone === '') {
      onOpenPopover()
      return
    }
    await createCustomer()
    closeHandler()
  }

  const onOpenPopoverChange = () => {
    if (user.popover) onClosePopover()
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
  }
}

export default useCreateCustomer
