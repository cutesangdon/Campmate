import './App.css';
import ReservationPage from './Component/ReservationPage';
import CampingZonePage from './Component/CampingZonePage';
import Header from './Component/header';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <h1>과제 GIT TEST</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/reservation" replace />} />
            <Route path="/campingzone" element={<CampingZonePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
        </Router>
      </div>
      
  );
}

export default App;
