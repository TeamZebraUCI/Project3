import React from "react";
import "./Page.css";
import Header from "../Header";
import Footer from "../Footer";

const Page = props => (
    <div className="Page">
        <Header>RavenStock</Header>
        <div className="content">
            {props.children}
        </div>
        <Footer />
    </div>);

export default Page;