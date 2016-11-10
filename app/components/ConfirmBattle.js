var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div> Confirm Battle </div>
}
module.exports = ConfirmBattle;
