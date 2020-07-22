import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Remedies from './RemediesControl';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [redirect, setRedirect] = useState(null)
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
      setRedirect(null);
      setRedirect(<Redirect to='/SignIn' />)
    }).catch(function (error) {
      console.log(error.message);
    });
  }



  return (
    <React.Fragment>
      {redirect}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Earthly Remedies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className="homeLink" to="/">Home</Link></Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={Remedies.handleClick}>Remedy List</NavDropdown.Item>
              <NavDropdown.Item>Add Remedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={doSignOut}>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className='searchButton' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;