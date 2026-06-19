import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Accomplishments from './pages/Accomplishments';
import Experience from './pages/Experience';
import Education from './pages/Education';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-wrapper" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/accomplishments" element={<Accomplishments />} />
        </Routes>
      </main>
      <footer className="custom-footer">
        {/* <p>Getting Bugs 🪲 Since 2019.</p> */}
      </footer>
    </div>
  );
}
