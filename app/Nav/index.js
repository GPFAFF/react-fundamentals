import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../context/theme';
import { NavLink } from 'react-router-dom';

import './index.scss';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

function Nav(props) {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <nav className='navigation'>
          <ul>
            <li><NavLink activeStyle={activeStyle} to="/" exact>Popular</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/battle">Battle</NavLink></li>
          </ul>
          <button
            style={{fontSize: 30}}
            onClick={toggleTheme}
          >
            {theme === 'light' 
              ? "💡" 
              : '🔦'
            }
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}

Nav.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
}

export default Nav

