import React, { Component } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import './Header.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home'
import List from '../Pages/List'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='Box'>
                    <Container >
                        <Navbar.Brand href="/">
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
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/list"> Список </Nav.Link>
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
                        <Route path="/" element={ <Home />} />
                        <Route path="/list" element={ <List />} />
                    </Routes>
                </BrowserRouter>

            </>
        )
    }
}
