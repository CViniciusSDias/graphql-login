import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', color: 'red' }}>
        Unfortunately an unknown error happened. It has been added to the logs, so it can be further investigated.
      </h1>;
    }

    return this.props.children;
  }
}