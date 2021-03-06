import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "../Scss/_Header.scss"
const Header = () => {
  return (
    <Navbar sticky="top" className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar__logo"> Redux Ecommerce </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="navbar__link" to="/">Home</NavLink>
            <NavLink className="navbar__link" to="/products">Products</NavLink>
            <NavLink className="navbar__link" to="/About">About us</NavLink>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header
