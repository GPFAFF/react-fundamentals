import React, { Component } from 'react'
import { battle } from '../../utils/api';
import Loading from '../../Loading';
import Card from '../../Card';
import PlayerProfile from '../PlayerProfile';
import queryString from 'query-string';

import { Link } from 'react-router-dom';

import './index.scss';

export default class PlayerResults extends Component {

  state = {
    winner: null,
    loser: null,
    error: null,
    isLoading: true
  }

  componentDidMount() {
    const { playerOne, playerTwo } = queryString.parse(this.props.location.search);

    battle([playerOne, playerTwo]).then((players) => (
      this.setState({
        winner: players[0],
        loser: players[1],
        error: null,
        isLoading: false
      })
    )).catch(({ message }) => {
      this.setState({
        error: message,
        isLoading: false
      })
    })
  }

  render() {
    const { winner, loser, error, isLoading } = this.state;
    const { resetBattle } = this.props;
    if (isLoading === true) return <Loading />

    if (error) {
      return (
        <p className='center-text error'>{error}</p>
      )
    }

    return (
      <main>
        <h1>Battle Results</h1>
        <section>

          <ul>
            <Card
              header={winner.score === loser.score ? 'Tie' : 'Winner'}
              image={winner.profile.avatar_url}
              image_alt={`Avatar for ${winner.profile.login}`}
              subheader={winner.score.toLocaleString()}
            />
            <PlayerProfile profile={winner.profile} />
          </ul>
          <ul>
            <Card
              header={winner.score === loser.score ? 'Tie' : 'Loser'}
              image={loser.profile.avatar_url}
              alt={`Avatar for ${loser.profile.login}`}
              subheader={loser.score.toLocaleString()}
            />
            <PlayerProfile profile={loser.profile} />
          </ul>
        </section>
        <Link
          className='reset'
          to="/battle"
        >
          Reset Battle
        </Link>
      </main>
    )
  }
}
