import axios from 'axios'

const qs = require('qs')

async function updateAppt({ idUser = '', idExam = '', idAppointment = '' }) {
  try {
    const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_APPOINTMENT}/updateAppointment`
    const data = qs.stringify({
      FK_UserClient: idUser,
      FK_Exam: idExam,
      idAppointment,
    })
    const config = {
      method: 'put',
      url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data,
    }
    const res = await axios(config)
    return res.data
  } catch (error) {
    return null
  }
}

export default updateAppt
