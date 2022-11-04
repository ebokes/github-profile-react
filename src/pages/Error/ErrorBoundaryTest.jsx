import React from "react";
import { Helmet } from "react-helmet-async";
import { ErrorTestContainer, IncrementBtn } from "./styles";

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
        <div>
          <Helmet>
            <title>ErrorBoundary Simulator</title>
            <meta
              name="description"
              content="Check to see that error boundary page fires"
            />
            <link rel="canonical" href="/err-boundary" />
          </Helmet>
          <h2>This is a simulated ErrorBoundary page</h2>
          <h1>{this.state.counter}</h1>
          <IncrementBtn onClick={this.handleClick}>+</IncrementBtn>
          <p>
            Click the button {this.state.decrement} times and watch what comes
            next
          </p>
        </div>
      </ErrorTestContainer>
    );
  }
}

export default ErrorBoundaryTest;
