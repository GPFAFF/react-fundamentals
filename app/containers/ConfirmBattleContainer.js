var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    console.log("getInitialState");
    return {
      isLoading: true,
      playersInfo: [],
    }
  },
  componentWillMount() {
    console.log("componentWillMount");
  },
  componentDidMount() {
    console.log("componentDidMount");
    var query = this.props.location.query;
    // fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
    console.log(query.playerOne);
    console.log(query.playerTwo);
  },
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  },
  componentWillUnMount() {
    console.log("componentWillMount");
  },
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    ); 
  }
})

module.exports = ConfirmBattleContainer;
