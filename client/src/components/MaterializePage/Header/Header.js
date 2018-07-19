import React from "react";
import "./Header.css";
import {Navbar,NavItem,Icon} from "react-materialize";
import LoginButton from "../LoginButton";
import User from "../UserBadge";


const Header = props =>(
    <Navbar className="Header" brand={props.text} right style={props.style}>
        <NavItem>User</NavItem>
        <NavItem href="/login"><Icon left>person</Icon>Login</NavItem>
    </Navbar>
);

export default Header;
