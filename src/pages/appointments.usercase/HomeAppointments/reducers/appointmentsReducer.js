import { appointmentsActions as actions } from '../models'

const reducerObject = (state, payload) => ({
  [actions.onChangeEmail]: { ...state, email: payload },
  [actions.onGoToSearchCustomer]: {
    ...state,
    currentScreen: 'SearchCustomer',
    email: '',
  },
  [actions.onGoToSelectAppointment]: {
    ...state,
    currentScreen: 'SelectAppointment',
    loading: false,
  },
  [actions.onShowCreateCustomer]: {
    ...state,
    createCustomerVisible: true,
    infoVisible: false,
  },
  [actions.onHideCreateCustomer]: {
    ...state,
    createCustomerVisible: false,
    infoVisible: false,
  },
  [actions.onShowInfo]: { ...state, infoVisible: true, createCustomerVisible: false },
  [actions.onHideInfo]: { ...state, infoVisible: false, createCustomerVisible: false },
  [actions.onChangeInfoMessage]: { ...state, infoMessage: payload },
  [actions.onLoading]: { ...state, loading: true },
  [actions.onStopLoading]: { ...state, loading: false },
  [actions.onError]: {
    ...state,
    infoMessage: payload,
    infoVisible: true,
    createCustomerVisible: false,
    email: '',
    loading: false,
  },
  [actions.onClear]: {
    ...state,
    email: '',
    currentScreen: 'SearchCustomer',
    createCustomerVisible: false,
    infoVisible: false,
    infoMessage: '',
    loading: false,
  },
  [actions.onSetIdUser]: { ...state, idUser: payload },
  [actions.onSetIdExamCatalog]: { ...state, idExamCatalog: payload },
  [actions.onSetIdAppointment]: { ...state, idAppointment: payload },
})

const appointmentsReducer = (state, action) => {
  const { type, payload } = action
  const reducer = reducerObject(state, payload)
  return reducer[type] || state
}

export default appointmentsReducer
