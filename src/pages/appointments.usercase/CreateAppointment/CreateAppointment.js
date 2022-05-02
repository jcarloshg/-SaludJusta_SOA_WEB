import SearchCustomer from './components/search-customer.component';
import SelectAppointment from './components/select-appointment.component';
import './CreateAppointment.css';

function CreateAppointment() {
  return (
    <main className="create-appointment-main">
      <SearchCustomer />
      <SelectAppointment />
    </main>
  );
}

export default CreateAppointment;
