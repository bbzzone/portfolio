import React from "react";
import Data from "./Data";
import quote from "../images/quote.png";

import "../styles/footer.css";


function Footer() {
    return (
        <div id="About">
            <h2>About</h2>
            <p className="highlight">
                <img src={quote} alt="quote"/>{Data.AboutMe.highlight}
            </p>
            <p>{Data.AboutMe.technology}</p>
            <p>{Data.AboutMe.buttering}</p>
            <div id="links">
                {Data.ProfileLinks.map(prf => 
                    <a key={prf.id} href={prf.link}><img src={prf.icon} alt="Icon"/></a>
                )}
            </div>
        </div>
    );
}


export default Footer;
