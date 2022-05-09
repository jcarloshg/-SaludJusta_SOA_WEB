import { useEffect, useState } from 'react'
import { getAvailableHoursDay, requesExamTypes } from '../services'

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

function useCreateAppointment() {
  const [typeOfExam, setTypeOfExam] = useState('AUDIOMETRÍA')
  const [typesOfExams, setTypesOfExams] = useState([])
  const [date, setDate] = useState(new Date())
  const [availableSchedules, setAvailableSchedules] = useState([])

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
      }
    }

    fetchTypesOfExams()
  }, [])

  const onChangeTypeOfExam = event => {
    console.log(`[onChangeTypeOfExam] -> `, event.target.value)
    setTypeOfExam(event.target.value)
  }

  const onChangeDate = async event => {
    setDate(event)
    const dateStr = event.toISOString().slice(0, 10)
    const res = await getAvailableHoursDay(typeOfExam, dateStr)

    if (res === null) {
      setAvailableSchedules([])
      return
    }

    const availableHours = res.data.map(schedule => ({
      id: schedule.idAppointment,
      date: schedule.date,
      time: schedule.time,
      status: schedule.status,
    }))
    setAvailableSchedules(availableHours)
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
