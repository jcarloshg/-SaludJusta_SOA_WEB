
export const appointmentViewObject = ({
    id = null, // ! this is important to render into table
    idAppointment = null,
    nameClient = null,
    typeExam = null,
    hour = null,
    status = null
}) => {
    return {
        id: id,
        idAppointment: idAppointment,
        nameClient: nameClient,
        typeExam: typeExam,
        hour: hour,
        status: status,
    }
}