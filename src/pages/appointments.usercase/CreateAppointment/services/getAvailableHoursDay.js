import axios from 'axios';

async function getAvailableHoursDay(typeExam = '', date = '') {
  try {
    const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_APPOINTMENT}/getAvailableHoursDay`;

    const res = await axios.get(url, {
      params: {
        typeExam,
        date,
      },
    });

    return res.data;
  } catch (error) {
    console.log(`[error] -> `, error);

    return null;
  }
}

export default getAvailableHoursDay;
