import React from 'react';

const Footer =()=>{
    return (
        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social-icon">
            {/* Your social icons go here */}
          </ul>
          <ul className="menu">
            {/* Your menu items go here */}
          </ul>
          <p>&copy;{new Date().getFullYear()} Price tracker | All Rights Reserved</p>
        </footer>
    );    
}
export default Footer;
