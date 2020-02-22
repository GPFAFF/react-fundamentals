import React, { Component } from 'react'
import Instructions from './Instructions'
import PlayerInput from './PlayerInput'
import { ThemeConsumer } from '../context/theme';
import PlayerPreview from './PlayerPreview';
import PlayerResults from './PlayerResults';
import { Link } from 'react-router-dom';

import './index.scss';

export default class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };

  handleSubmit = (id, player) => {
    this.setState({
      [id]: player
    })
  };

  handleReset = (id) => {
    this.setState({
      [id]: null
    })
  }

  resetBattle = (id, player) => {
    this.setState({
      [id]: null,
      battle: false,
    })
  }

  componentDidMount() {

  }

  render() {

    const { playerOne, playerTwo } = this.state;

    // if (battle === true) {
    //   return <PlayerResults 
    //     resetBattle={this.resetBattle} 
    //     playerOne={playerOne} 
    //     playerTwo={playerTwo} 
    //   />
    // }

    return (
      <section>
        <h1>Github Battle</h1>
        <Instructions />
        <div className='form-container'>
          <div className='player-input'>
            {playerOne === null
              ? <PlayerInput
                  label='Player One'
                  onSubmit={(player) => this.handleSubmit('playerOne', player)}
                />
              : <PlayerPreview
                  username={playerOne}
                  label='Player One'
                  onReset={() => this.handleReset('playerOne')}
                />
            }
            {playerTwo === null
              ? <PlayerInput
                  label='Player Two'
                  onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                />
              : <PlayerPreview
                  username={playerTwo}
                  label='Player Two'
                  onReset={() => this.handleReset('playerTwo')}
                />
            }
          </div>
        </div>
        {playerOne && playerTwo && (
          <Link
            className='battle'
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
            }}
          >
            Battle
          </Link>
        )}
      </section>
    )
  }
}
