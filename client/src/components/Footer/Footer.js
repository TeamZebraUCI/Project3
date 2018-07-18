import React from "react";
import "./Footer.css";
import {Navbar, NavItem} from 'react-materialize'

const Footer = props =>(
    <Navbar brand="logo" right>
        <NavItem onClick={()=>{console.log("test click")}}>ITEM</NavItem>
    </Navbar>
); 

export default Footer;
