import React, { Component } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import './Header.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home'
import List from '../Pages/List'
import Bogush from '../Pages/bagushevichPage'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='Box'>
                    <Container >
                        <Navbar.Brand href="/cpi_bellitclub/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-bar" />
                        <Navbar.Collapse id="responsive-nav-bar" >
                            <Nav className="me-auto">
                                <Nav.Link href="/cpi_bellitclub/"> Главная </Nav.Link>
                                <Nav.Link href="/cpi_bellitclub/list"> Список </Nav.Link>
                            </Nav>
                            <NavDropdown title="Язык" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Русский</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    English
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path="/cpi_bellitclub/" element={ <Home />} />
                        <Route path="/cpi_bellitclub/list" element={ <List />} />
                        <Route path="/cpi_bellitclub/bogush" element = { <Bogush />} />
                    </Routes>
                </BrowserRouter>

            </>
        )
    }
}
