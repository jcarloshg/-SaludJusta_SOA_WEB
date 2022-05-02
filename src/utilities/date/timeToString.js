

function format_two_digits(n) {
    return n < 10 ? '0' + n : n;
}

/**
 *
 * @param {Date} date
 * @returns
 */
export const timeToString = (date) => {
    const hours = format_two_digits(date.getHours());
    const minutes = format_two_digits(date.getMinutes());
    // const seconds = format_two_digits(date.getSeconds());
    return `${hours}:${minutes} hrs`
    // hours + ":" + minutes + ":" + seconds;
}
