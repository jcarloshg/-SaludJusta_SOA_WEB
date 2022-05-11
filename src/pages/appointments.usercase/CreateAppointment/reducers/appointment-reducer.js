import actions from './appointment-actions'
import initialAppointment from './initial-appointment'

const reducerObject = (state = '', payload = null) => ({
  [actions.onEmptySchedules]: { ...state, availableSchedules: [] },
  [actions.onFillSchedules]: { ...state, availableSchedules: payload },
  [actions.onFillExams]: { ...state, typesOfExams: payload },
  [actions.onSetTypeOfExam]: { ...state, typeOfExam: payload },
  [actions.onSetDate]: { ...state, date: payload },
  [actions.onSelectAppt]: { ...state, time: payload, confirmOpen: true },
  [actions.onLoading]: { ...state, loading: true },
  [actions.onStopLoading]: { ...state, loading: false },
  [actions.onOpenConfirm]: { ...state, confirmOpen: true },
  [actions.onCloseConfirm]: { ...state, confirmOpen: false },
  [actions.onReset]: { ...state, ...initialAppointment },
})

const appointmentReducer = (state, action) => {
  const { type, payload } = action
  const reducer = reducerObject(state, payload)
  return reducer[type] || state
}

export default appointmentReducer
