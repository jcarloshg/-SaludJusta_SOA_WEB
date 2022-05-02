
const axios = require('axios').default;

/**
 *
 * @param {string} idExam*
 * @param {string} results
 * @returns
 */
export const recordResults = async (idExam, results) => {
    try {

        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_EXAM}/recordResults`;

        const params = new URLSearchParams();
        params.append('idExam', idExam);
        params.append('results', results);
        return await axios.put(url, params);

    } catch (error) {
        // console.log(`[recordResults] -> `, error);
        return error.response;
    }
}
