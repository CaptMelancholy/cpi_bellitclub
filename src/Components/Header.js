import React, { Component } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='Box'>
                    <Container >
                        <Navbar.Brand>
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
                                <Nav.Link><Link to="/" style={{ textDecoration: 'none', color: 'grey' }}>Главная</Link></Nav.Link>
                                <Nav.Link><Link to="list" style={{ textDecoration: 'none', color: 'grey' }}>Список</Link></Nav.Link>
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
            </>
        )
    }
}
