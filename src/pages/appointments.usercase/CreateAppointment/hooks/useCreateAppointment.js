import { useEffect, useState } from 'react'
import { getAvailableHoursDay, requesExamTypes } from '../services'

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

function useCreateAppointment() {
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
      console.log(`[typos] -> `, res)

      if (res !== null) {
        const types = res.data.map(type => ({
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
  }, [])

  const onChangeTypeOfExam = async event => {
    console.log(`[onChangeTypeOfExam] -> `, event.target.value)
    setTypeOfExam(event.target.value)
    const dateStr = date.toISOString().slice(0, 10)
    await fetchAvailableHours(event.target.value, dateStr)
  }

  const onChangeDate = async event => {
    setDate(event)
    const dateStr = event.toISOString().slice(0, 10)
    await fetchAvailableHours(typeOfExam, dateStr)
  }

  return {
    date,
    typeOfExam,
    typesOfExams,
    availableSchedules,
    onChangeTypeOfExam,
    onChangeDate,
  }
}

export default useCreateAppointment
