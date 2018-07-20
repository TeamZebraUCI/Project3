import React from "react";
import "./Footer.css";
import {Footer} from 'react-materialize'
const MyFooter = props =>(
    <Footer style={props.style} copyrights="&copy 2018 Copyright Text" className='MyFooter'>
        content
    </Footer>
); 

export default MyFooter;
