var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    console.log("getInitialState");
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount() {
    console.log("componentWillMount");
  },
  componentDidMount() {
    console.log("componentDidMount");
    var query = this.props.location.query;
    // fetch info from github then update state
    console.log(query.playerOne);
    console.log(query.playerTwo);
  },
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  },
  componentWillUnMount() {
    console.log("componentWillMount");
  },
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer;
