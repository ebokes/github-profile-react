import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ErrorTestContainer, IncrementBtn } from "./styles";
import { motion } from "framer-motion";

const ErrorBoundaryTest = () => {
  const [counter, setCounter] = useState(0);
  const [decrement, setDecrement] = useState(3);

  const handleCount = () => {
    setCounter((prev) => prev + 1);
    setDecrement((prev) => prev - 1);
  };

  if (counter === 3) {
    // Simulate an error!
    throw new Error("Simulated error.");
  }

  return (
    <ErrorTestContainer>
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.5 }}
        initial={{ scale: 0, opacity: 0 }}
      >
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
        <p>
          Click the button {decrement}{" "}
          {decrement === 3 ? "" : decrement === 2 ? "more " : "last "}
          time
          {decrement !== 1 && "s"} to trigger an error
        </p>
      </motion.div>
    </ErrorTestContainer>
  );
};

export default ErrorBoundaryTest;
