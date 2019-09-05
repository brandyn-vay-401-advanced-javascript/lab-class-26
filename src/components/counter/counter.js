import React from "react";

import "./counter.scss";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  };

  decrement = e => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div id="counter">
        <button onClick={this.decrement}>-</button>
        <h4>{this.state.count}</h4>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
