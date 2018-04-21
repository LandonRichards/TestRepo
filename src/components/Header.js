import React from 'react';
import logo from "../images/tonberryLandscapeBlack.png";

class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
    render () {
    return (
    	<div>
      		<img src={logo} id="TonberryLogo" alt="Logo"/>
      	</div>
    );
  }
}

export default Header;