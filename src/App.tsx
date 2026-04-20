import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
