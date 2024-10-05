import './App.css'
import Test from './pages/Test';
import Home from './pages/Home';
import Checkapi from './pages/Checkapi';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // applying custom theme globally
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/checkapi" element={<Checkapi />} />
        </Routes>
      </Router>
      <Footer />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App
