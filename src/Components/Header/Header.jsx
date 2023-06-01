import React, {useContext, useState} from 'react'
import "./Header.css"
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeContext';
import Favorites from '../../Pages/Favorites/Favorites';

function Header() {
  //* create a variable for dark mode for test
  // const darkMode = true;
  //const [darkMode, setDarkMode] = useState(true)

  //change ot global state
  // { } NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  return (
    <div className={darkMode?'header-container header-dark': 'header-container'}>
        <div>
            <Link to="/" style={ {marginRight: "10px"} }>Home</Link>
            <Link to="/About" style={ {marginRight: "10px"}}>About</Link>
            <Link to="/Episodes" style={ {marginRight: "10px"}}>Episodes</Link>
        </div>
        <Link to="/favorites">My Favorites</Link>
        <button onClick={()=>setDarkMode(!darkMode)} className={darkMode?'theme-button theme-button-dark': 'theme-button'}>
          {
            darkMode?
            "Light mode"
            :
            "Dark Mode"
          }
          </button>
    </div>
  )
}

export default Header