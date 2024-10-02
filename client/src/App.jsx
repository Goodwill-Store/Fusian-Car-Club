import './App.css'
import Test from './Test';
import Home from './Home';
import Checkapi from './Checkapi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/checkapi" element={<Checkapi />} />
      </Routes>
    </Router>
  );
}

export default App
