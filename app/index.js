var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: "Greg Pfaff",
  username: "GPFAFF",
  image: "https://avatars3.githubusercontent.com/u/1102168?v=3&s=466"
}
/*
  FIRST REACT ACRONYMN 

  Focused
  Independent
  Reusable
  Smart
  Testable
*/

var ProfilePic = React.createClass({
  render() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var Link = React.createClass({
  changeURL() {
    window.location.replace(this.props.href);
  },
  render() {
    return (
      <span
      onClick={this.changeURL}
      style={{color: 'red', cursor: 'pointer'}}>
        {this.props.children}
      </span>
    )
  }
})

var ProfileLink = React.createClass({
  render() {
    return (
      <div>
        <Link href={"https://github.com/" + this.props.username}> {this.props.username} </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render() {
    return (
      <div> {this.props.name} </div>
    )
  }
});

var Avatar = React.createClass({
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileLink username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
      </div>
    )
  }
})

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
