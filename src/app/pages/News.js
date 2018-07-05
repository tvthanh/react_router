import React from 'react';

// Component require
import Article from '../components/Article';

export default class News extends React.Component {
  render() {
    const Articles = [
      'Healthy food for you',
      'Grateful for every day',
      'Crypto change the bank',
      'The Barter to Bitcoin',
      'The mysteries of these pyramids',
      'Monter black hole',
      'Why you should learn new language',
      'The largest mountain in the solar system',
      'Shopping for the apocalypse'
    ].map( (title, i) => <Article key={i} title={title} /> );

    return (
      <div>
        <h3>News page</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet dui vitae tellus rhoncus posuere. Donec id tempor nulla, nec suscipit lacus. Vestibulum luctus tempor nisl nec sollicitudin. Suspendisse potenti. Proin malesuada ex in mi porttitor iaculis. Phasellus a tortor et tortor tempus ullamcorper et at magna. Phasellus ornare leo ut nibh mollis iaculis. Duis nec orci mi. Aenean nulla nisi, porttitor non orci vel, viverra pretium magna. Quisque quis nunc et dui posuere dapibus vitae quis diam.</p>

        <div class="row">{Articles}</div>
      </div>
    );
  }
};
