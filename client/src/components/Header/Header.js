import React from "react";
import "./Header.css";

const Header = props =>(
    <div className="Header">
        <h4 className="title">{props.children}</h4>;
    </div>
); 

export default Header;
