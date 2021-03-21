import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <footer>
          <p>Copyrigth &#169; {currentYear} </p>
        </footer>
      </div>
    );
}
export default Footer;