import CreateCustomer from './CreateCustomer';
import SearchCustomer from './SearchCustomer';
import SelectAppointment from './SelectAppointment';
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
    visible,
    onGoToSearchCustomer,
    onGoToSelectAppointment,
    onGoToCreateCustomer,
    onChangeEmail,
    onChangeTypeOfExam,
    onChangeDate,
    closeHandler,
  } = useCreateAppointment();

  return (
    <>
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
      <CreateCustomer visible={visible} closeHandler={closeHandler} />
    </>
  );
}

export default CreateAppointment;
