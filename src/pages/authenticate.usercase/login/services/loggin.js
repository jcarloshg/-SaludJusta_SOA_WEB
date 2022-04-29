
const axios = require('axios').default;

/**
 *
 * @param {string} email
 */
export const loggin = async (email, password) => {

    try {
        // http://localhost:8080/api_account/loggin?email=carlosj12336@gmail.com&password=jose123
        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_ACCOUNT}/existAccount`;
        const res = await axios.get(
            url,
            {
                params: {
                    email: email,
                    password: password
                }
            }
        );
        return res.data;
    } catch (error) {
        console.log(`[error] -> `, error);
        return null;
    }
}