
const axios = require('axios').default;

/**
 *
 * @param {string} idAppointment
 */
export const markAppointmentAsProgress = async (idAppointment) => {
    try {

        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_APPOINTMENT}/markAppointmentAsProgress`;

        const params = new URLSearchParams();
        params.append('idAppointment', idAppointment);
        return await axios.put(url, params);

    } catch (error) {
        // console.log(`[recordResults] -> `, error);
        return error.response;
    }
}
