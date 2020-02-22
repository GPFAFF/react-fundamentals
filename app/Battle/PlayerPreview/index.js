import React, { Component } from 'react'
import { FaTimesCircle } from 'react-icons/fa';
import './index.scss';

export default class PlayerPreview extends Component {
  render() {
    const { username, onReset, label } = this.props;

    return (
      <div>
        <h3> { label } </h3>
        <div className='player'>
          <a href={`https://github.com/${username}`}>
            {username}
          </a>
          <img 
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <button
            className='cancel'
            onClick={onReset}
          >
            <FaTimesCircle color='rgb(194, 56, 42)' size={26} />
          </button>
        </div>
      </div>
    )
  }
}
