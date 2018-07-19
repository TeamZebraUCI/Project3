import React from "react";
import "./Page.css";
import Header from "../Header";
import Footer from "../Footer";

import {Helmet} from "react-helmet";


const Page = props => (
    <div className="Page">
        <Helmet>
            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"></link>
        </Helmet>

        <Header
            style={props.style}
            text={props.text}
        />

        <div className="content">
            {props.children}
        </div>

        <Footer
            style={props.style}
        />

        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="path/to/your/bundle.js"></script>
    </div>);

export default Page;