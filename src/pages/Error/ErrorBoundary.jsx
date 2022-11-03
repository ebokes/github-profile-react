import React from "react";
import { ErrorBoundarySection, Heading } from "./styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundarySection>
          <Heading>Oops! Something went wrong</Heading>
        </ErrorBoundarySection>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
