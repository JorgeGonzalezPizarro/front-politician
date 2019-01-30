import React, {Component} from 'react';
import logo from '../../logo.svg'
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faHome,  faList,  faUserPlus} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap-social/bootstrap-social.css';

const NavBarMenu = (props) =>   {
    console.log(props);
        return (
            <React.Fragment>
                <NavbarToggler onClick={props.onClick}/>
                <NavbarBrand className="mr-auto" href="/">Politicians</NavbarBrand>
                <img src={logo} height="30" width="30" alt="logo"/>
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span><FontAwesomeIcon icon={faHome}/>Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/politicians">
                                <span><FontAwesomeIcon icon={faList}/>Politicians</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/create">
                                <span><FontAwesomeIcon icon={faUserPlus}/>Add politician</span>
                            </NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
            </React.Fragment>


        );

};
export default NavBarMenu;