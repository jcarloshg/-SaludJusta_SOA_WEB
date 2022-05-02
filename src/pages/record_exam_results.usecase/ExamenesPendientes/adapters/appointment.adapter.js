import Appointment from "../../../../models/Appointment.entitie";

const defaultAppointment = new Appointment({});

export const createAdapterAppointment = (endpointUserApointment = defaultAppointment) => {

    return new Appointment({
        idAppointment: endpointUserApointment.idAppointment,
        date: endpointUserApointment.date,
        time: endpointUserApointment.time,
        status: endpointUserApointment.status,
        FK_Exam: endpointUserApointment.FK_Exam,
        FK_ExamCatalog: endpointUserApointment.FK_ExamCatalog,
        FK_UserClient: endpointUserApointment.FK_UserClient,
        exam: endpointUserApointment.exam,
    });

}