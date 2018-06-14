import React from 'react';
import ReactDOM from 'react-dom';

const app = document.getElementById('app');

export default class Layout extends React.Component {
  render() {
    return (
      <h1>Welcome {this.props.author} to React!!!</h1>
    );
  }
};

ReactDOM.render(<Layout author="Thomas" />, app);
