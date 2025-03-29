import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Home from './Home.jsx'; // Halaman Ramadhan
import THR from './THR.jsx'; // Halaman THR

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Router sebaiknya membungkus seluruh aplikasi */}
      <Routes>
        <Route path="/Ramadan-1446H" element={<Home />} />
        <Route path="/Ramadan-1446H/THR" element={<THR />} /> {/* Halaman THR */}
      </Routes>
    </Router>
  </StrictMode>
);
