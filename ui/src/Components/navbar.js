import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse} from "shards-react";
import React, { Component } from 'react';
import axios from "axios";
import * as ROUTES from '../Constants/routes';
import { Button, ButtonGroup } from "shards-react";
import { Route, Routes } from "react-router-dom";
import bookMyMovieLogo from '../Images/logo.png';

axios.defaults.baseURL = "http://localhost:3001";


class NavBar extends Component {
    constructor(props){
      super(props);
          
        this.quitAction = this.quitAction.bind(this);
    }

    componentDidMount() { 
        // set who is a manager call to database check login
    }

    quitAction() {
    
        window.location.href = ROUTES.LANDING;
    }

    logoutAction() {
        localStorage.setItem('username', null);
        localStorage.setItem('usertype', null);
        window.location.href = ROUTES.LANDING;
    }

    render(){

        const renderNavbar = ()=>{

            const username = localStorage.getItem('username');
            const usertype = localStorage.getItem('usertype');
            console.log(username);
            console.log(usertype);

            if (usertype == "user" && username != null) {
                console.log("user");
                return (
        
                    <Navbar sticky="false" type="dark" theme="dark" expand="sm">
                        <img src={bookMyMovieLogo} alt="dashboardlogo" width='150px' height='70px'/>
                        <div style={{color:'white'}}>welcome member {username}!</div>
                        <Nav className="ml-auto" navbar>
                        <NavItem> 
                            <NavLink active href="#" onClick={() => this.quitAction()}>
                                Home      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.CITYSEARCH}>
                                Book Movie      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.MYRESERVATIONS}>
                                My Reservations      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.VIEWSTATUSPOINTS}>
                                My Points      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.USERPREFERENCE}>
                                Preferences      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.ACCOUNTSETTINGS}>
                                Settings      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.CHAT}>
                                Chat      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href="#" onClick={() => this.logoutAction()}>
                                Log Out      
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Navbar>
        
                )
            }
            else if (usertype == "employee" && username != null) {
                console.log("employee");
                return (
        
                    <Navbar sticky="false" type="dark" theme="dark" expand="sm">
                        <img src={bookMyMovieLogo} alt="dashboardlogo" width='150px' height='70px'/>
                        <div style={{color:'white'}}>welcome, {username}!</div>
                        <Nav className="ml-auto" navbar>
                        <NavItem> 
                            <NavLink active href="#" onClick={() => this.quitAction()}>
                                Home      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.CITYSEARCH}>
                                Book Movie      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href="#" onClick={() => this.logoutAction()}>
                                Log Out      
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Navbar>
        
                )
            }
            else if (usertype == "admin") {
                console.log("admin");
                return (
        
                    <Navbar sticky="false" type="dark" theme="dark" expand="sm">
                        <img src={bookMyMovieLogo} alt="dashboardlogo" width='150px' height='70px'/>
                        <div style={{color:'white'}}>welcome, {username}!</div>
                        <Nav className="ml-auto" navbar>
                        <NavItem> 
                            <NavLink active href="#" onClick={() => this.quitAction()}>
                                Home      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.EDITSHOWTIME}>
                                Edit Showtime     
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.EDITCINEMA}>
                                Edit Cinema    
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.EDITPOINTS}>
                                Edit Points    
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.VISUALIZEDATA}>
                                Visualize Data   
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.RESERVATIONS}>
                                Reservations   
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.FEEDBACK}>
                                Feedbacks   
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href = {ROUTES.CHAT}>
                                Chat      
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink active href="#" onClick={() => this.logoutAction()}>
                                Log Out      
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Navbar>
        
                )
            } else {
                return (
        
                <Navbar sticky="false" type="dark" theme="dark" expand="sm">
                <img src={bookMyMovieLogo} alt="dashboardlogo" width='150px' height='70px'/>
                <Nav className="ml-auto" navbar>
                <NavItem> 
                    <NavLink active href="#" onClick={() => this.quitAction()}>
                        Home      
                    </NavLink>
                </NavItem>
                    <NavItem>
                    <NavLink active href = {ROUTES.LOGIN}>
                        Login   
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href = {ROUTES.REGISTER}>
                        Register
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active href = {ROUTES.CITYSEARCH}>
                        Book Movie     
                    </NavLink>
                </NavItem>
                </Nav>
            </Navbar>
                )

            }
        }

        return (
        
            <div>
    
            {renderNavbar()}
            
            
            <div id="errorMessage"></div>
            </div>
            )
    }
        
     

  } export default NavBar;