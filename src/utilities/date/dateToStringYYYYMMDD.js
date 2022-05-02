
/**
 *
 * @param {Date} date
 * @returns
 */
export const dateToStringYYYYMMDD = (date) => {
    return date.toISOString().slice(0, 10);
}
