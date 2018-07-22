import React from "react";
import Page from "../../components/MaterializePage";
import {Helmet} from "react-helmet";

const NoMatch = props=>(
    <Page
        style={{
            "background-color":"#9b179b",//<------ THEME COLOR
            }
        }
        text="P3"//<---- LOGO TEXT
    >
    <Helmet>
        <title>404 Page</title>
    </Helmet>
    <h1> 404, No Page Found</h1>
    </Page>
);

export default NoMatch;