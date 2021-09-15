import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => (
  <Navbar sticky="top" bg="white" className="navbar d-flex justify-content-center align-content-center">
    <Link className="nav-home text-center" to="/">Home</Link>
  </Navbar>
);

export default NavBar;
