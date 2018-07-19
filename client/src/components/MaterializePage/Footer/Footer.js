import React from "react";
import "./Footer.css";
import {Footer} from 'react-materialize'
const MyFooter = props =>(
    <Footer style={props.style} copyrights="&copy 2015 Copyright Text" className='MyFooter'>
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Footer>
); 

export default MyFooter;
