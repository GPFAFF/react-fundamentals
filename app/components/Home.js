var React = require('react');
var transparentBg = require('../styles').transparentBg
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render() {
    return (
      <MainContainer>
        <h1> Github Battle </h1>
        <p className="lead"> FIGHTTTT!!! </p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success" style={styles.button}> Get Started </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
