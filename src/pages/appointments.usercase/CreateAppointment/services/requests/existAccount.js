import axios from 'axios'

async function existAccount(email = '') {
  try {
    const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_ACCOUNT}/existAccount`
    const res = await axios.get(url, { params: { email } })
    return res.data
  } catch (error) {
    return null
  }
}

export default existAccount
