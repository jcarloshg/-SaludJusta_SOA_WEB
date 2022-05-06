import { useEffect, useState } from 'react'
import { getAvailableHoursDay, requesExamTypes } from '../services'

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

function useCreateAppointment() {
  const [email, setEmail] = useState('')
  const [typeOfExams, setTypeOfExams] = useState('AUDIOMETRÍA')
  const [typesOfExams, setTypesOfExams] = useState([])
  const [date, setDate] = useState(new Date())
  const [availableSchedules, setAvailableSchedules] = useState([])
  const [currentComponent, setCurrentComponent] = useState('SearchCustomer')
  const [visible, setVisible] = useState(true)

  const onGoToSearchCustomer = () => setCurrentComponent('SearchCustomer')
  const onGoToSelectAppointment = () => setCurrentComponent('SelectAppointment')
  const onGoToCreateCustomer = () => setCurrentComponent('CreateCustomer')

  useEffect(() => {
    const fetchTypesOfExams = async () => {
      const res = await requesExamTypes()
      console.log(`[typos] -> `, res)

      if (res !== null) {
        const types = res.data.map((type) => ({
          value: type.typeExam,
          label: capitalize(type.typeExam.toLowerCase()),
        }))

        setTypesOfExams(types)
      }
    }

    fetchTypesOfExams()
  }, [])

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangeTypeOfExam = (event) => {
    console.log(`[onChangeTypeOfExam] -> `, event.target.value)
    setTypeOfExams(event.target.value)
  }

  const onChangeDate = async (event) => {
    setDate(event)
    const dateStr = event.toISOString().slice(0, 10)
    const res = await getAvailableHoursDay(typeOfExams, dateStr)

    if (res === null) {
      setAvailableSchedules([])
      return
    }

    const availableHours = res.data.map((schedule) => ({
      id: schedule.idAppointment,
      date: schedule.date,
      time: schedule.time,
      status: schedule.status,
    }))
    setAvailableSchedules(availableHours)
  }

  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }

  return {
    email,
    typeOfExams,
    typesOfExams,
    date,
    availableSchedules,
    currentComponent,
    visible,
    onGoToSearchCustomer,
    onGoToSelectAppointment,
    onGoToCreateCustomer,
    onChangeEmail,
    onChangeTypeOfExam,
    onChangeDate,
    closeHandler,
  }
}

export default useCreateAppointment
