import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StockDetail from './pages/StockDetail';
import SectorDetail from './pages/SectorDetail';
import './index.css';

function App() {
  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock/:symbol" element={<StockDetail />} />
          <Route path="/sector/:sectorId" element={<SectorDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
