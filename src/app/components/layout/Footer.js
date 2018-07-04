import React from 'react';

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      borderTop: '1px solid #ddd',
      padding: '10px 0'
    };
    return (
      <div class="container" style={footerStyle}>
        <p>Copyright &copy; React.io</p>
      </div>
    );
  }
}
