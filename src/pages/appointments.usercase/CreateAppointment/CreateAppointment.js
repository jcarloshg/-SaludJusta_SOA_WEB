import SearchCustomer from './components/search-customer.component';
import SelectAppointment from './components/select-appointment.component';
import './CreateAppointment.css';
import useCreateAppointment from './hooks/useCreateAppointment';

function CreateAppointment() {
  const {
    // email,
    typeOfExams,
    typesOfExams,
    date,
    availableSchedules,
    // onChangeEmail,
    onChangeTypeOfExam,
    onChangeDate,
  } = useCreateAppointment();

  return (
    <main className="row create-appointment-main">
      {/* <SearchCustomer email={email} onChangeEmail={onChangeEmail} /> */}
      <SelectAppointment
        typesOfExams={typesOfExams}
        typeOfExam={typeOfExams}
        onChangeTypeOfExam={onChangeTypeOfExam}
        date={date}
        onChangeDate={onChangeDate}
        availableSchedules={availableSchedules}
      />
    </main>
  );
}

export default CreateAppointment;
