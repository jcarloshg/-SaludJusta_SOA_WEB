import axios from 'axios'
import qs from 'qs'
import { generatePassword } from '../../../../utilities'

async function createAccount({
  name = '',
  lastName = '',
  age = 0,
  gender = '',
  phoneNumber = '',
  email = '',
}) {
  try {
    const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_ACCOUNT}/createAccount`
    const data = qs.stringify({
      name,
      lastName,
      age,
      gender,
      phoneNumber,
      email,
      password: generatePassword(12),
      role: 'CLIENT',
    })

    const res = await axios.post(url, data)

    return res.data
  } catch (error) {
    return null
  }
}

export default createAccount
