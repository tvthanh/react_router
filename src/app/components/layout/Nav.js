import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    const homeClass = location.pathname === '/' ? 'active' : '';
    const aboutClass = location.pathname.match(/^\/about/) ? 'active' : '';
    const newsClass = location.pathname.match(/^\/news/) ? 'active' : '';
    const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
    const contactClass = location.pathname.match(/^\/contact/) ? 'active' : '';
    const navClass = collapsed ? 'collapse' : '';

    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link class="navbar-brand" to="/" onClick={this.toggleCollapse.bind(this)}>Project name</Link>
          </div>
          <div id="navbar" class={"navbar-collapse " + navClass}>
            <ul class="nav navbar-nav">
              <li class={homeClass}>
                <IndexLink to={"/"} onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={aboutClass}>
                <Link to={"/about"} onClick={this.toggleCollapse.bind(this)}>About</Link>
              </li>
              <li class={newsClass}>
                <Link to={"/news"} onClick={this.toggleCollapse.bind(this)}>News</Link>
              </li>
              <li class={archivesClass}>
                <Link to={"/archives"} onClick={this.toggleCollapse.bind(this)}>Archives</Link>
              </li>
              <li class={contactClass}>
                <Link to={"/contact"} onClick={this.toggleCollapse.bind(this)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
