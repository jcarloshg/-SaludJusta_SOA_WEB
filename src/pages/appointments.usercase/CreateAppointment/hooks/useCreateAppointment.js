import { useContext, useEffect, useState } from 'react'
import { AppointmentsContext as context } from '../../HomeAppointments/contexts/AppointmentsContext'
import { getAvailableHoursDay, requesExamTypes, updateAppointment } from '../services'

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

function useCreateAppointment() {
  const { ctxState, onSetIdExamCtlg } = useContext(context)

  const [typeOfExam, setTypeOfExam] = useState('')
  const [typesOfExams, setTypesOfExams] = useState([])
  const [date, setDate] = useState(new Date())
  const [availableSchedules, setAvailableSchedules] = useState([])

  const fetchAvailableHours = async (typeExam = '', dateStr = '') => {
    const res = await getAvailableHoursDay(typeExam, dateStr)
    if (res === null) {
      setAvailableSchedules([])
      return
    }
    const availableHours = res.data.map(schedule => ({
      id: schedule.idAppointment,
      date: schedule.date.split('T')[0] ?? '',
      time: schedule.time,
      status: schedule.status,
      accion: schedule.idAppointment,
    }))
    setAvailableSchedules(availableHours)
  }

  useEffect(() => {
    const fetchTypesOfExams = async () => {
      const res = await requesExamTypes()

      if (res !== null) {
        const types = res.data.map(type => ({
          idExamCatalog: type.idExamCatalog,
          value: type.typeExam,
          label: capitalize(type.typeExam.toLowerCase()),
        }))

        setTypesOfExams(types)
        setTypeOfExam(types[0].value)

        const dateStr = date.toISOString().slice(0, 10)
        await fetchAvailableHours(types[0].value, dateStr)
      }
    }

    fetchTypesOfExams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeTypeOfExam = async event => {
    const typeExam = event.target.value
    const idExam = typesOfExams.find(type => type.value === typeExam).idExamCatalog

    setTypeOfExam(event.target.value)
    onSetIdExamCtlg(idExam)

    const dateStr = date.toISOString().slice(0, 10)
    await fetchAvailableHours(event.target.value, dateStr)
  }

  const onChangeDate = async event => {
    setDate(event)
    const dateStr = event.toISOString().slice(0, 10)
    await fetchAvailableHours(typeOfExam, dateStr)
  }

  const onSelectAppt = async (idAppt = '') => {
    console.log('idAppt', idAppt)
    console.log('ctxState', ctxState)
    const res = await updateAppointment({
      idUser: ctxState.idUser,
      idExam: ctxState.idExamCatalog,
      idAppointment: idAppt,
    })
    console.log('res', res)
  }

  return {
    date,
    typeOfExam,
    typesOfExams,
    availableSchedules,
    onChangeTypeOfExam,
    onChangeDate,
    onSelectAppt,
  }
}

export default useCreateAppointment
