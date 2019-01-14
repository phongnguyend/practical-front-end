
var React = require('react');

var Timer = React.createClass({

  // some es6 magic. Will be compiled.
  getInitialState() {
    return {secondsElapsed: 0};
  },

  // normal es5 stuff.
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    // JSX in here gets parsed with the babel loader.
    return (
      <div>
        <h3>It's the final countdown</h3>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }

});

React.render(<Timer />, document.getElementById('container'));


// loads the login.es6 file
require('./login');


