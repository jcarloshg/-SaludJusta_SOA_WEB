
const axios = require('axios').default;

/**
 *
 * @param {string} email
 */
export const existAccount = async (email) => {

    try {

        const url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_ACCOUNT}/existAccount`;

        // const params = new URLSearchParams();
        // params.append('asdf', 'value1');
        // params.append('123', 'value2');

        // const data = await axios.get(
        //     url,
        //     params
        // );
        // console.log(`[data] -> `, data);
        const config = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            data: {
                "post_id": 1
            },
            params: {}
        }
        axios.get(url, config)

    } catch (error) {
        // console.log(`[error] -> `, error);
    }

    // console.log(`[url] -> `, process.env.REACT_APP_URL);
    // console.log(`[API_APPOINTMENT] -> `, process.env.REACT_APP_API_APPOINTMENT);

}