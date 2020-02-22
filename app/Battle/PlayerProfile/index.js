import React, { Component, Fragment } from 'react';
import Tooltip from '../../Tooltip';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';

export default class PlayerProfile extends Component {
  render() {
    const { 
      profile: {
        name, 
        location, 
        company, 
        followers, 
        following, 
        html_url, 
        login 
      } 
    } = this.props;

    return (
      <Fragment>
        <h2>
          <a className='link' href={html_url}>
            {login}
          </a>
        </h2>
        <ul className='card-list'>
          <li>
            <FaUser color='rgb(239, 115, 115)' size={22} />
            {name}
          </li>
          {location && (
            <li>
              <Tooltip text="Users Location">
                <FaCompass color='rgb(144, 115, 255)' size={22} />
                {location}
              </Tooltip>
            </li>
          )}
          {company && (
            <li>
              <Tooltip text="Users Company">
                <FaBriefcase color='#795548' size={22} />
                {company}
              </Tooltip>
            </li>
          )}
          <li>
            <FaUsers color='rgb(129, 195, 245)' size={22} />
            {followers.toLocaleString()} followers
          </li>
          <li>
            <FaUserFriends color='rgb(64, 183, 95)' size={22} />
            {following.toLocaleString()} following
          </li>
        </ul> 
      </Fragment>
    )
  }
}
