
const axios = require('axios').default;

export const requestExamsToday = async () => {

    try {
        // http://localhost:8080/api_account/existAccount?email=alejando@email.com
        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_EXAM}/requestExamsToday`;
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(`[error] -> `, error);
        return null;
    }
}