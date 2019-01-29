import React, { Component } from 'react';

import {Jumbotron, Navbar, NavbarBrand , NavbarToggler} from "reactstrap";
import {BrowserRouter , Link , NavLink } from "react-router-dom";
import NavBarMenu from './NavBar';
export default class Header extends Component {
    constructor (props){
        super(props);
        this.state = {
            isNavOpen : false
        }
    }
    toggleNavBar = () => {
        const isNavOpen = !this.state.isNavOpen;
        console.log(this.state);
        this.setState({
            isNavOpen : isNavOpen
        });
    };
    render() {
        return(
          <React.Fragment>
              <Navbar dark color="#00c4a3" expand="md">
                  <div className="container">
                      <NavBarMenu onClick = {this.toggleNavBar} isOpen={this.state.isNavOpen}/>
                  </div>
              </Navbar>
              <Jumbotron>
              <div className="container">
                  <div className="row row-header">
                      <div className="col-12 col-sm-6">
                          <h1>Politicians </h1>
                          <p>Politician web site </p>
                      </div>
                  </div>
              </div>
              </Jumbotron>
          </React.Fragment>


        );
    }

}
