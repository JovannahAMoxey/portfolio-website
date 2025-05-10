import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'; // Make sure this path is correct
import Contact from './pages/Contact';
import BlogViewer from './pages/BlogViewer';
import BlogAdmin from './pages/BlogAdmin';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogViewer />} />
        <Route path="/admin" element={<BlogAdmin />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </>
  );
}

export default App;