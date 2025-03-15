import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Room from "./Components/Room/Room";
import Whatsapp from './Components/Whatsapp/Whatsapp';
import ContactUs from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';
import ScrollToTop from "./Components/ScrolltoTop";
import Custom from './Components/Custom/Custom';

function App() {
  return (
    <Router>
      <Navbar  />
      <ScrollToTop />
      <Sidebar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </Router>
  );
}

export default App;
