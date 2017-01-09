var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100px',
    marginTop: '30px',
  }
};

var Loading = React.createClass({
  getDefaultProps() {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState() {
    this.originalText =  this.props.text
    return {
      text: this.originalText
    }
  },
  componentDidMount() {
    var stop =  this.originalText + "...";
    this.interval = setInterval(function (){
      if (this.state.text === stop) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + "."
        })
      }
    }.bind(this), this.props.speed)
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  },
})

module.exports = Loading;
