import React from "react";
import { ErrorTestContainer } from "./styles";

class ErrorBoundaryTest extends React.Component {
  state = {
    counter: 0,
    decrement: 5,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      decrement: this.state.decrement - 1,
    });
  };

  render() {
    if (this.state.counter === 5) {
      // Simulate an error!
      throw new Error("Simulated error.");
    }
    return (
      <ErrorTestContainer>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
        <p>
          Click the button {this.state.decrement} times and watch what comes
          next
        </p>
      </ErrorTestContainer>
    );
  }
}

export default ErrorBoundaryTest;
