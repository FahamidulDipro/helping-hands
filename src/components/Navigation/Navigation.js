import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navigation.css';
const Navigation = () => {
  const [user] = useAuthState(auth);

    return (
        <Navbar bg="light" expand="lg">
          {
            console.log(user)
          }
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
              {
                user?<Button variant='primary mt-1'>Logout</Button>:<span>   <Button className='mx-3 mt-1' ><NavLink to='/login' className="text-decoration-none text-light">Register</NavLink></Button>
                <Button variant='dark mt-1'>Admin</Button></span>
              }
           
            </Nav>
            <span style={{fontWeight:'bold'}}><img src={user?.photoURL} alt="UserImage" style={{height:'50px',borderRadius:'50%' ,marginRight:'20px'}}/>{user?.displayName}</span>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mx-2"
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