import React from 'react';

class Logger extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

    render = () => {
      const { children } = this.props;
      return children;
    }
}

export const withLogger = (Component) => () => (
  <Logger>
    <Component />
  </Logger>
);
