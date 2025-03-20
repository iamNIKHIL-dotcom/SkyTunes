import React from "react";
import logoBase from '../assets/logoBase.png';
function Footer(){
    return (
        <div  classstyle = "footer" {...{display : "flex", justifyContent: "space-between"}}>
            
        <div className="footer-logo nav-logo">
            <a href = "/">
                <img className = "logo-img" src = {logoBase}  ></img>
            </a>
        </div>
            <div className="footer-desciption">Built by Nikhil</div>
        </div>
    );
}
export default Footer;