
import { days } from "./daysArry"
import { months } from "./monthsArry"

/**
 *
 * @param {Date} date
 * @returns
 */
export const dateToString = (date) => {
    return `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
}
