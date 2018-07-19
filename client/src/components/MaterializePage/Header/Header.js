import React, {Component} from "react";
import "./Header.css";
import {Navbar,NavItem,Icon} from "react-materialize";


class Header extends Component {
    
    showNavItem = ()=>{
        if (!this.props.promptLogin){
            return;
        }else{
            if(this.props.username){
                return <NavItem href="#"><Icon left>person</Icon>{this.props.username}</NavItem>;
            }
            return <NavItem href="/login"><Icon left>person</Icon>Login</NavItem>;
        }
    };

    render(){
        return(
            <Navbar className="Header" brand={this.props.text} right style={this.props.style}>
                {this.showNavItem()}
            </Navbar>
        );
    }
}
// const Header = props =>(
//     <Navbar className="Header" brand={props.text} right style={props.style}>
//         {NavShow()}
//     </Navbar>
// );

export default Header;
