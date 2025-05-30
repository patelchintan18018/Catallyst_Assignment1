import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';
import AdminPage from './pages/AdminPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<EmployeePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
);

export default App;
