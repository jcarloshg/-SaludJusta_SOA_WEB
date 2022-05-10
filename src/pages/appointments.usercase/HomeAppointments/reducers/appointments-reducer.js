import { appointmentsActions as actions } from './'

const reducerObject = (state, payload) => ({
  [actions.onGoToSearchCust]: { ...state, screen: 'SearchCustomer' },
  [actions.onGoToSelectAppt]: {
    ...state,
    screen: 'SelectAppointment',
    loading: false,
  },
  [actions.onShowCreateCust]: {
    ...state,
    createCustVisible: true,
    infoVisible: false,
  },
  [actions.onHideCreateCust]: {
    ...state,
    createCustVisible: false,
    infoVisible: false,
  },
  [actions.onShowInfo]: { ...state, infoVisible: true, createCustVisible: false },
  [actions.onHideInfo]: { ...state, infoVisible: false, createCustVisible: false },
  [actions.onChangeInfoMsg]: { ...state, infoMessage: payload },
  [actions.onLoading]: { ...state, loading: true },
  [actions.onStopLoading]: { ...state, loading: false },
  [actions.onError]: { ...state, error: payload },
  [actions.onChangeInfoMsg]: { ...state, infoMessage: payload },
  [actions.onError]: {
    ...state,
    infoMessage: payload,
    infoVisible: true,
    createCustVisible: false,
    loading: false,
  },
  [actions.onClear]: {
    ...state,
    screen: 'SearchCustomer',
    createCustVisible: false,
    infoVisible: false,
    infoMessage: '',
    loading: false,
  },
  [actions.onSetIdUser]: { ...state, idUser: payload },
  [actions.onSetIdExamCtlg]: { ...state, idExamCatalog: payload },
  [actions.onSetIdAppt]: { ...state, idAppointment: payload },
})

const appointmentsReducer = (state, action) => {
  const { type, payload } = action
  const reducer = reducerObject(state, payload)
  return reducer[type] || state
}

export default appointmentsReducer
