import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import PagenotFound from './pages/pagenotfound/Pagenotfound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  );
}

export default App;
