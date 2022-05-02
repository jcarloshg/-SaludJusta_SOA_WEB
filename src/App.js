import Login from './pages/authenticate.usercase/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomeExam } from './pages/record_exam_results.usecase/HomeExam/HomeExam';
import { Topbar } from './components';
import { HomeAppointments } from './pages/appointments.usercase/HomeAppointments/HomeAppointments';

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="HomeExam/*" element={<HomeExam />} />
          <Route path="HomeAppointments/*" element={<HomeAppointments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
