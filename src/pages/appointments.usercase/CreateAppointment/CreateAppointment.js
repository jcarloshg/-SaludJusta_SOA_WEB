import SearchCustomer from './components/search-customer.component';
import SelectAppointment from './components/select-appointment.component';
import useCreateAppointment from './hooks/useCreateAppointment';
import './CreateAppointment.css';

function CreateAppointment() {
  const {
    email,
    typeOfExams,
    typesOfExams,
    date,
    availableSchedules,
    currentComponent,
    onGoToSearchCustomer,
    onGoToSelectAppointment,
    onGoToCreateCustomer,
    onChangeEmail,
    onChangeTypeOfExam,
    onChangeDate,
  } = useCreateAppointment();

  return (
    <main className="row create-appointment-main">
      {currentComponent === 'SearchCustomer' && (
        <SearchCustomer
          email={email}
          onChangeEmail={onChangeEmail}
          onSearchCustomer={onGoToSelectAppointment}
          onCreateCustomer={onGoToCreateCustomer}
        />
      )}
      {currentComponent === 'SelectAppointment' && (
        <SelectAppointment
          typesOfExams={typesOfExams}
          typeOfExam={typeOfExams}
          onChangeTypeOfExam={onChangeTypeOfExam}
          date={date}
          onChangeDate={onChangeDate}
          availableSchedules={availableSchedules}
          onGoBack={onGoToSearchCustomer}
        />
      )}
    </main>
  );
}

export default CreateAppointment;
