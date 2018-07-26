import React, {Component} from "react";
import "./Header.css";
import {Navbar,NavItem,Icon} from "react-materialize";


class Header extends Component {
    
    showNavItem = ()=>{
        if(this.props.username){
            return <NavItem href="/login"><Icon left>person</Icon>{this.props.username}</NavItem>;
        }
        return <NavItem href="/login"><Icon left>person</Icon>Login</NavItem>;
        // if (!this.props.promptLogin){  -----------------------------dont need both, we can check to see username by looking at login
        //     return;
        // }else{
        //     if(this.props.username){
        //         return <NavItem href="#"><Icon left>person</Icon>{this.props.username}</NavItem>;
        //     }
        //     return <NavItem href="/login"><Icon left>person</Icon>Login</NavItem>;
        // }
    };

    render(){
        return(
            <Navbar className="Header" brand={this.props.text} right style={this.props.style}>
                {this.showNavItem()}
            </Navbar>
        );
    }
}

export default Header;
