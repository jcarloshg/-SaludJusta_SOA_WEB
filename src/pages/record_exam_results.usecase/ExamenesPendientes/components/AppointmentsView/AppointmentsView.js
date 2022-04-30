import Appointment from "../../../../../models/Appointment.entitie";

const defaultAppointment = new Appointment({});

export const AppointmentsView = ({ appointment = defaultAppointment }) => {

   return (
      <div>
         <p>{JSON.stringify(appointment)}</p>
      </div>
   );

}