
/**
 *
 * @param {string} hhmmss
 * @returns
 */
export const hhmmssToString = (hhmmss) => {
    const date = new Date(); // Creates a Date Object using the clients current time

    const [hours, minutes, seconds] = hhmmss.split(':');

    date.setHours(+hours); // Set the hours, using implicit type coercion
    date.setMinutes(minutes); // can pass Number or String - doesn't really matter
    date.setSeconds(seconds);

    return date;
}
