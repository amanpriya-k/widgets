import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  render() {
    return (
      <div class="clock">
        <div class="names">
          <h1>time ~ </h1>
          <h1>date ~ </h1>
        </div>

        <div class="data"><h1> {this.formatTime()} </h1>
        <h1>{this.state.time.toDateString()}</h1></div>

      </div>
    );
  }

  formatTime(){
    let currentTime = ('0' + this.state.time.getHours() % 12).slice(-2) + ':' + ('0' + (this.state.time.getMinutes())).slice(-2) + ':' + ('0' + this.state.time.getSeconds()).slice(-2);
    (this.state.time.getHours() > 11) ? currentTime+= "   PM" : currentTime+= "    AM";
    return currentTime;
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

}

export default Clock;
