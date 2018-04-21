import React from 'react';
import logo from "../images/tonberryLandscapeBlack.png";

class Key extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
    render () {
    return (
    	<div class="large-12-columns" id="key">
          <h1><u>Understanding Opponent Skill</u></h1>
          <br></br>
      		<ul id="keyValues">
            <li><span>Adds:</span> Lower-level enemy whose strength is in numbers. Occasionally difficult, but rarely in the same sense as the higher tiers.</li>
            <br/>
            <li><span>Mini-Boss:</span> A sturdier, more dangerous enemy. A good example is Shadow Link in The Legend of Zelda.</li>
            <br/>
            <li><span>Mid-Boss:</span> A truly serious enemy, occasionally more difficult to defeat than a games' actual Final Boss. Death in Castlevania exemplifies the type.</li>
            <br/>
            <li><span>Final Boss:</span> The apex of opponent difficulty. Typified by bosses such as Skolas from Destiny.</li>
          </ul>
      </div>
    );
  }
}

export default Key;