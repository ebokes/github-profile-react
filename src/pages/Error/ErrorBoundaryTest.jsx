import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ErrorTestContainer, IncrementBtn } from "./styles";

const ErrorBoundaryTest = () => {
  const [counter, setCounter] = useState(0);
  const [decrement, setDecrement] = useState(5);

  const handleCount = () => {
    setCounter((prev) => prev + 1);
    setDecrement((prev) => prev - 1);
  };

  if (counter === 5) {
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
        <h1>{counter}</h1>
        <IncrementBtn onClick={handleCount}>+</IncrementBtn>
        <p>Click the button {decrement} times and watch what comes next</p>
      </div>
    </ErrorTestContainer>
  );
};

export default ErrorBoundaryTest;
