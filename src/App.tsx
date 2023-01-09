import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Listing from './pages/Listing/Listing';
import PagenotFound from './pages/pagenotfound/Pagenotfound';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/allusers" element={<Listing />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
