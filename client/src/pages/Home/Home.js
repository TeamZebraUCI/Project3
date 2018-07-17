import React,{Component, Fragment} from "react";
import Notes from '../../components/Notes/Notes'

class Home extends Component{

    render(){
        return (
            <Fragment>
            <h1>THIS IS THE HOME PAGE</h1>
            <Notes />
            </Fragment>
        );
    }
};

export default Home;