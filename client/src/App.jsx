import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Merch from './pages/Merch';
import Gallery from './pages/Gallery';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // applying custom theme globally
import { CssBaseline } from '@mui/material';

//This is the main application component that uses our child components(Home, Test, etc) to build the page
//It also defines routes, path is the url and element tells it which component to render. Note component has to be imported first.
function App() {

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Merch" element={<Merch />} />
        </Routes>
      </Router>
      <Footer />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App
