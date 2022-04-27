import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand to="#" ><NavLink to="/" className='fw-bold text-success text-decoration-none'>Helping Hands</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/" className={({isActive})=>isActive?'active-link':'link'}>Home</NavLink>
               
              <NavLink to="/add-services" className={({isActive})=>isActive?'active-link':'link'}>
                Add Events
              </NavLink>
              <NavLink to="/events" className={({isActive})=>isActive?'active-link':'link'}>
                Events
              </NavLink>
              <NavLink to="/blog" className={({isActive})=>isActive?'active-link':'link'}>
                Blog
              </NavLink>
              <Button className='mx-3 mt-1'>Register</Button>
              <Button variant='dark mt-1'>Admin</Button>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;