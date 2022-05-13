import axios from 'axios'
import { generatePassword } from '../../../../../utilities'

const qs = require('qs')

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
      name: name,
      lastName: lastName,
      age: age,
      gender: gender,
      phoneNumber: phoneNumber,
      email: email,
      password: generatePassword(12),
      role: 'CLIENT',
    })
    const config = {
      method: 'post',
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

export default createAccount
