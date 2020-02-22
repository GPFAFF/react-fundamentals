import React, { Component } from 'react';
import { fetchUser } from  '../../utils/api.js';
import './index.scss';

export class PlayerInput extends Component {
  state = {
    username: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  };
  
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  };

  render() {
    return (
      <form className="player" onSubmit={this.handleSubmit}>
        <label htmlFor="username">{this.props.label}</label>
        <input
          id="username"
          type="text"
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button
          type="submit" 
          disabled={!this.state.username} 
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default PlayerInput
