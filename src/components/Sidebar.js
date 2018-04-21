import React from 'react';
import { bubble as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (
      <Menu id="menu">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="learn" className="menu-item" href="/about">Learn</a>
        <a id="create" className="menu-item" href="/create">Create</a>
        <a id="serve" className="menu-item" href="/serve">Serve</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Sidebar;