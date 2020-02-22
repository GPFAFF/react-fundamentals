import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { 
  FaUser, 
  FaExclamationTriangle, 
  FaStar, 
  FaCodeBranch 
} from 'react-icons/fa';

import './index.scss';

export default class Grid extends Component {
  render() {
    const { repos } = this.props;
    return (
      <ul>
        {repos.map((repo, index) => {
          const { 
            owner, 
            html_url, 
            stargazers_count, 
            forks, 
            open_issues 
          } = repo;
          const { login, avatar_url } = owner;

          return (
            <li key={html_url}>
              <Card
                header={`#${index + 1}`}
                image={avatar_url}
                image_alt={`Avatar url for ${login}`}
              />
              <ul className="icons">
                <li>
                  <FaUser color='rgb(255, 191, 116)' size={22} />
                  <a href={`https://github.com${login}`}>
                    {login}
                  </a>
                </li>
                <li>
                  <FaStar color='rgb(255, 215, 0)' size={22} />
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                  {open_issues.toLocaleString()} open issues
                </li>
              </ul>
            </li>
          )
      })}
    </ul> 
    )
  }
}

Grid.propTypes = {
  repos: PropTypes.array.isRequired
}
