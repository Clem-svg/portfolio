/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './index.scss';

const Navigationbar = () => (
  <Navbar collapseOnSelect expand="sm" className="NavigationBar">
    <Navbar.Brand id="brand" href="/">Clémentine Fouqué</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Item className="mx-3">
          <Nav.Link href="/code" id="NavLink">Code</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-3">
          <Nav.Link href="/cvFouque.pdf" id="NavLink" download target="_blank">CV⇩</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mx-3">
          <Nav.Link href="/contact" id="NavLink">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default Navigationbar;
