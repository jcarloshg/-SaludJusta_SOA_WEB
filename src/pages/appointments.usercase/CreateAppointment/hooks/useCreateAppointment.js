import { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { dateToStringYYYYMMDD } from '../../../../utilities/date/dateToStringYYYYMMDD'
import { AppointmentsContext as context } from '../../HomeAppointments/contexts/AppointmentsContext'
import { appointmentActions as actions, appointmentReducer, initialAppointment } from '../reducers'
import { findIdExam, mappingExamTypes, mappingSchedules } from '../services'
import { getAvailableHoursDay, requesExamTypes, updateAppt } from '../services/requests'

function useCreateAppointment() {
  const navigate = useNavigate()
  const { ctxState, onSetIdAppt, onSetIdExamCtlg, onApptSelected, onError, onHideInfo } =
    useContext(context)
  const [appt, dispatch] = useReducer(appointmentReducer, initialAppointment)

  const apptDispatch = (type = '', payload = null) => dispatch({ type, payload })
  const onEmptyScheds = () => dispatch({ type: actions.onEmptySchedules })
  const onFillScheds = (scheds = []) => apptDispatch(actions.onFillSchedules, scheds)
  const onFillExams = (exams = []) => apptDispatch(actions.onFillExams, exams)
  const onSetTypeOfExam = (type = '') => apptDispatch(actions.onSetTypeOfExam, type)
  const onSetDate = (date = new Date()) => apptDispatch(actions.onSetDate, date)
  const onSelectAppt = (time = '') => apptDispatch(actions.onSelectAppt, time)
  const onLoading = () => dispatch({ type: actions.onLoading })
  const onCloseConfirm = () => dispatch({ type: actions.onCloseConfirm })
  const onReset = () => dispatch({ type: actions.onReset })

  const fetchAvailableHours = async (typeExam = '', dateStr = '') => {
    const res = await getAvailableHoursDay(typeExam, dateStr)
    if (res === null) return onEmptyScheds()
    const availableHours = mappingSchedules(res.data)
    onFillScheds(availableHours)
  }

  useEffect(() => {
    const fetchTypesOfExams = async () => {
      const res = await requesExamTypes()
      if (res !== null) {
        const types = mappingExamTypes(res.data)
        onFillExams(types)
        onSetTypeOfExam(types[0].value)
        onSetIdExamCtlg(types[0].idExamCatalog)
        const dateStr = dateToStringYYYYMMDD(appt.date)
        await fetchAvailableHours(types[0].value, dateStr)
      }
    }

    fetchTypesOfExams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeTypeOfExam = async event => {
    const typeExam = event.target.value
    const idExam = findIdExam(appt.typesOfExams, typeExam)
    onSetTypeOfExam(typeExam)
    onSetIdExamCtlg(idExam)
    const dateStr = dateToStringYYYYMMDD(appt.date)
    await fetchAvailableHours(event.target.value, dateStr)
  }

  const onChangeDate = async event => {
    onSetDate(event)
    const dateStr = dateToStringYYYYMMDD(event)
    await fetchAvailableHours(appt.typeOfExam, dateStr)
  }

  const onSelectAppointment = async (idAppt = '', appt = { time: '' }) => {
    onSetIdAppt(idAppt)
    onSelectAppt(appt.time)
  }

  const onConfirmSelectAppt = async () => {
    onLoading()
    const res = await updateAppt({
      idUser: ctxState.idUser,
      idExam: ctxState.idExamCatalog,
      idAppointment: ctxState.idAppointment,
    })
    if (res === null) return onError('Error al actualizar la cita')

    const dateStr = dateToStringYYYYMMDD(appt.date)
    onApptSelected(appt.typeOfExam, appt.time.slice(0, 5), dateStr)
    onReset()

    setTimeout(() => {
      onHideInfo()
      navigate('/HomeAppointments')
    }, 2000)
  }

  return {
    appt,
    onChangeTypeOfExam,
    onChangeDate,
    onSelectAppointment,
    onCloseConfirm,
    onConfirmSelectAppt,
  }
}

export default useCreateAppointment
