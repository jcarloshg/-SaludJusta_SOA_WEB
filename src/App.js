import Login from './pages/authenticate.usercase/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { HomeExam } from './pages/record_exam_results.usecase/HomeExam/HomeExam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="HomeExam/*" element={<HomeExam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
