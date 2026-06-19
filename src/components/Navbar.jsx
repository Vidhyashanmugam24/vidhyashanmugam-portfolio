import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ theme, toggleTheme }){
  return(
    <nav className="custom-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo-btn">
          Vidhya Shanmugam
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Home
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Skills
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Education
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Experience
          </NavLink>
          <NavLink to="/accomplishments" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Accomplishments
          </NavLink>
        </div>

        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme" title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}

