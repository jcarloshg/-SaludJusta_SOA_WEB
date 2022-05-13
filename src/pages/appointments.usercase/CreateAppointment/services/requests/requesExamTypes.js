import axios from 'axios';

async function requesExamTypes() {
  try {
    const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_EXAM}/request_exam_types`;

    console.log(`[url] -> `, url);

    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.log(`[error] -> `, error);

    return null;
  }
}

export default requesExamTypes;
