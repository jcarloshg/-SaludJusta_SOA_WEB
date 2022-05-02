
const axios = require('axios').default;

/**
 *
 * @param {string} date
 */
export const requestAppointmentsDay = async (date) => {

    try {

        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_APPOINTMENT}/requestAppointmentsDay`;

        const res = await axios.get(
            url,
            {
                params: {
                    date: date,
                }
            }
        );

        return res.data;

    } catch (error) {
        // console.log(`[recordResults] -> `, error);
        return error.response.data;
    }
}
