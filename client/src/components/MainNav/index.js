// Import dependencies
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.scss';

// Create and export Navbar component
export default function MainNav() {
  return(
    <Navbar bg="dark" variant="dark" className="main-nav">
      <Navbar.Brand href="/">Book Finder</Navbar.Brand>
      <Nav>
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
}