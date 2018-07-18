import React from "react";
import "./Footer.css";

const Footer = props =>(
    <div className="Footer">
        <h4 className="text">{props.children}</h4>;
    </div>

); 

export default Footer;
