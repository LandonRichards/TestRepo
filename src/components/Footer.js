import React from "react";

class Footer extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
    render () {
    return (
    	<div class="container">
            <ul class="menu">
                <li id="rebel"><a href="https://github.com/patrickmexal"><img class="icon" src="https://www.shareicon.net/download/2015/09/19/103665_mobile_512x512.png" /></a></li>
                <li><a href="https://www.linkedin.com/in/patrickmexal/"><img class="icon" src="https://vignette.wikia.nocookie.net/the-most-popular-girls-in-school/images/1/1a/Linkedin.png/revision/latest?cb=20150730204727" /></a></li>
                <li><a href="https://stackoverflow.com/users/8630696/patrickmexal"><img class="icon" src="http://hammerjs.github.io/assets/img/stackoverflow-icon.svg" /></a></li>
                <li><a href="https://www.instagram.com/patrickmexal/"><img class="icon" src="http://diylogodesigns.com/blog/wp-content/uploads/2016/05/Instagram-logo-png-icon.png" /></a></li>
            </ul>
        </div>
    );
  }
}

export default Footer;