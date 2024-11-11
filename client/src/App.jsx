import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Merch from './pages/Merch';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // applying custom theme globally
import { CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Full viewport height
        }}
      >
        <ResponsiveAppBar />

        {/* Main content area */}
        <Box sx={{ flex: 1 }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/events" element={<Events />} />
              <Route path="/Merch" element={<Merch />} />
              <Route path="/Blog" element={<Blog />} />
            </Routes>
          </Router>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
