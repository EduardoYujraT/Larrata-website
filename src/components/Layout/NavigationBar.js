import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Layout/NavigationBar.css';
import logo from './logo.svg'


export default function NavigationBar() {
    return (
        <div className="navigationBar">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="title" href="#home">
                {/*<img alt="logo" src={logo} width="40" height="40" className="d-d-inline-block align-top"></img>*/}
                Larrata Files</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <Nav.Link className="item" href="#home">Reglamento</Nav.Link>
                <Nav.Link className="item" href="#link">Miembros</Nav.Link>
                <Nav.Link className="item" href="">Issues</Nav.Link>
                <Nav.Link className="item" href="">New Issue</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
