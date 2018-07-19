import React from "react";
import "./LoginButton.css";
import {Icon,Button} from "react-materialize";

const LoginButton = props =>(
    <Button href="/login" className="LoginButton" waves='light'>Login<Icon left>person</Icon></Button> 
); 

export default LoginButton;
