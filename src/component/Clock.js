import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setTimeout(this.tick, 1000);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
