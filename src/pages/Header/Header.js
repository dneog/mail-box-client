import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from 'react-router-dom';
const Header = () => {
  return (
    <Navbar className="bg-body-tertiary text-decoration-none">
      <Container>
        <Navbar.Brand href="#home">Mail box</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div class="navbar-nav fs-5">
        
        <a class="nav-link" aria-current="page" href="/login">Login</a>
        <a class="nav-link" href="/">Home</a>
       
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header