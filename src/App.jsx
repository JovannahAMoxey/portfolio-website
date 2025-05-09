import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'; // Make sure this path is correct
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </>
  );
}

export default App;