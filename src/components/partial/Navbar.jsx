import React from "react";
import { Navbar as UINavbar, Nav } from "../UI";

function Navbar() {
  return (
    <UINavbar>
      <UINavbar.Logo to="/">Logo</UINavbar.Logo>
      <UINavbar.Collapse>
        <Nav className="nav-tabs">
          <Nav.Item>
            <Nav.Link to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/posts" disabled>
              Posts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item className="ml-auto">
            <UINavbar.DarkmodeToggler />
          </Nav.Item>
        </Nav>
      </UINavbar.Collapse>
    </UINavbar>
  );
}

export default Navbar;
