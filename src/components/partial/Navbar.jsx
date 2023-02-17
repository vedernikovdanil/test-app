import React from "react";
import { Navbar as UINavbar, Nav } from "../UI";

function Navbar() {
  const [darkmode, setDarkmode] = React.useState(false);
  return (
    <UINavbar bg={darkmode ? "dark" : "light"}>
      <UINavbar.Logo to="/">Logo</UINavbar.Logo>
      <UINavbar.Collapse>
        <Nav className="nav-tabs" autoWrap={true}>
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/about">About</Nav.Link>
          <Nav.Link to="/posts" disabled>
            Posts
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item className="ml-auto">
            <input
              type="checkbox"
              className="darkmode-toggler"
              onChange={(e) => setDarkmode(e.target.checked)}
            />
          </Nav.Item>
        </Nav>
      </UINavbar.Collapse>
    </UINavbar>
  );
}

export default Navbar;
