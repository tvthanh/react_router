import React from 'react';

// Component require
import Article from '../components/Article';

export default class Archives extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h3>Archives page</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet dui vitae tellus rhoncus posuere. Donec id tempor nulla, nec suscipit lacus. Vestibulum luctus tempor nisl nec sollicitudin. Suspendisse potenti. Proin malesuada ex in mi porttitor iaculis. Phasellus a tortor et tortor tempus ullamcorper et at magna. Phasellus ornare leo ut nibh mollis iaculis. Duis nec orci mi. Aenean nulla nisi, porttitor non orci vel, viverra pretium magna. Quisque quis nunc et dui posuere dapibus vitae quis diam.

        Donec ultrices nunc dui, sed pellentesque odio ornare nec. Vestibulum elementum mauris ex, sed euismod lacus consectetur blandit. Sed rutrum erat fringilla malesuada vulputate. Vestibulum ultricies vestibulum massa at pellentesque. Curabitur in urna mauris. Phasellus tempor in felis mollis elementum. Aenean diam justo, imperdiet ut nisl et, viverra rhoncus sem. Aenean hendrerit orci a venenatis pretium. Nullam lectus erat, maximus vel enim eget, vestibulum vehicula quam. Nam id blandit felis. Morbi facilisis ipsum vitae nulla aliquet suscipit. Etiam dapibus auctor imperdiet. Quisque id mattis magna, at tempus justo. Nullam ullamcorper lacinia dui. Aliquam commodo tincidunt facilisis.</p>

        <div class="row">{Articles}</div>
      </div>
    );
  }
};
