import React, { Component } from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import './index.scss';
import { ThemeConsumer } from '../../context/theme';

export default class Instructions extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => {
          <section className={`instructions-container ${theme}`}>
            <h2> Instructions </h2>
            <ul>
              <li>
                <h3>Enter two Github users</h3>
                <FaUserFriends color="rgb(244, 191, 116)" size={140} />
              </li>
              <li>
                <h3>Battle</h3>
                <FaFighterJet color="#737373" size={140} />
              </li>
              <li>
                <h3>Enter two Github users</h3>
                <FaTrophy color="rgb(255, 215, 0)" size={140} />
              </li>
            </ul>
          </section>
        }} 
      </ThemeConsumer>
    )
  }
}
