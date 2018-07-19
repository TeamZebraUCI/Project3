import React from "react";
import "./Footer.css";
import {Navbar, NavItem} from 'react-materialize'

const Footer = props =>(
    <Navbar className="Footer" right style={props.style}>
    </Navbar>
); 

export default Footer;
