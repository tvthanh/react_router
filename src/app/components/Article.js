import React from 'react';

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    const colStyle = {
      marginBottom: '15px'
    }

    return (
      <div class="col-md-4" style={colStyle}>
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet dui vitae tellus rhoncus posuere. Donec id tempor nulla, nec suscipit lacus. Vestibulum luctus tempor nisl nec sollicitudin. Suspendisse potenti.</p>
        <a class="btn btn-default">Detail</a>
      </div>
    );
  }
}
