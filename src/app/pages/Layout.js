import React from 'react';

import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: '60px'
    };
    return (
      <div>
        <Nav />
        <div class="container" style={containerStyle}>
          <div class="row">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
