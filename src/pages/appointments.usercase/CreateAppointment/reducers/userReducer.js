import initialUser from '../models/initial-user'
import actions from '../models/user-actions'

const reducerObject = (state, payload) => ({
  [actions.onChangeName]: { ...state, name: payload },
  [actions.onChangeLastName]: { ...state, lastName: payload },
  [actions.onChangeAge]: { ...state, age: payload },
  [actions.onChangeGender]: { ...state, gender: payload },
  [actions.onChangeEmail]: { ...state, email: payload },
  [actions.onChangePhone]: { ...state, phoneNumber: payload },
  [actions.onNextStep]: { ...state, step: state.step + 1 },
  [actions.onPreviusStep]: { ...state, step: state.step - 1 },
  [actions.onOpenPopover]: { ...state, popover: true },
  [actions.onClosePopover]: { ...state, popover: false },
  [actions.onLoading]: { ...state, isLoading: true },
  [actions.onStopLoading]: { ...state, isLoading: false },
  [actions.onChangeMessage]: { ...state, message: payload },
  [actions.onClear]: { ...initialUser },
})

const userReducer = (state, action) => {
  const { type, payload } = action
  const reducer = reducerObject(state, payload)
  return reducer[type] || state
}

export default userReducer
