import initialUser from './initial-user'
import userActions from './user-actions'

const messages = [
  'No dejes campos vacíos',
  'Error al crear usuario',
  'Email inválido',
  'Teléfono inválido',
]

const reducerObject = (state = '', payload = null) => ({
  // Fields
  [userActions.onChangeName]: { ...state, name: payload },
  [userActions.onChangeLastName]: { ...state, lastName: payload },
  [userActions.onChangeAge]: { ...state, age: payload },
  [userActions.onChangeGender]: { ...state, gender: payload },
  [userActions.onChangeEmail]: { ...state, email: payload },
  [userActions.onChangePhone]: { ...state, phoneNumber: payload },
  // Steps
  [userActions.onNextStep]: { ...state, step: state.step + 1 },
  [userActions.onPreviusStep]: { ...state, step: state.step - 1 },
  // Popover
  [userActions.onOpenPopover]: { ...state, popover: true },
  [userActions.onClosePopover]: { ...state, popover: false },
  // Loading
  [userActions.onLoading]: { ...state, isLoading: true },
  [userActions.onStopLoading]: { ...state, isLoading: false },
  // Messages
  [userActions.onChangeMessage]: { ...state, message: payload },
  [userActions.onClear]: { ...initialUser },
  // Handlers
  [userActions.onEmptyFields]: { ...state, message: messages[0], popover: true },
  [userActions.onError]: {
    ...state,
    message: messages[1],
    isLoading: false,
    popover: true,
  },
  [userActions.onEmailError]: {
    ...state,
    message: messages[2],
    isLoading: false,
    popover: true,
  },
  [userActions.onPhoneError]: {
    ...state,
    message: messages[3],
    isLoading: false,
    popover: true,
  },
})

const userReducer = (state, action) => {
  const { type, payload } = action
  const reducer = reducerObject(state, payload)
  return reducer[type] || state
}

export default userReducer
