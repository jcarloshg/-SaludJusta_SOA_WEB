import SearchCustomer from './SearchCustomer';
import SelectAppointment from './SelectAppointment';
import useCreateAppointment from './hooks/useCreateAppointment';
import './CreateAppointment.css';
import CreateCustomer from './components/create-customer.component';
import { useState } from 'react';

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

  const [visible, setVisible] = useState(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

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
