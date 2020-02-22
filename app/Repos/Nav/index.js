import React from 'react'
import { languages } from '../../utils/languages';
import './index.scss';

const Nav = ({ onUpdateLanguage, selected }) => (
  <nav className='repo-nav'>
    <ul>
      {languages.map(language => (
        <li key={language}>
          <button
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
