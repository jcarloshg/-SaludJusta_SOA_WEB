import Login from './pages/authenticate.usercase/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomeExam } from './pages/record_exam_results.usecase/HomeExam/HomeExam';
import Appointments from './pages/appointments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="HomeExam/*" element={<HomeExam />} />
        <Route path="/Appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
