import { NavLink } from "react-router-dom";

import { useContext } from 'react';
import { ThemeContext } from './../context/theme.context';

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);       // <== UPDATE

  return (
    <nav className={"Navbar " + theme}>
      <div>
        <NavLink to="/" exact activeClassName="selected">Home</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
      </div>

      {/*  👇  ADD  👇   */}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'dark 🌜' : 'light 🟡'}
      </button>
    </nav>
  );
}

export default Navbar;
