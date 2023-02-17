import React from "react";
import * as UI from "../UI";

function Navbar() {
  const [darkmode, setDarkmode] = React.useState(false);
  return (
    <UI.Navbar breakpoint="md" bg={darkmode ? "dark" : "light"}>
      <UI.Navbar.Logo to="/">Logo</UI.Navbar.Logo>
      <UI.Navbar.Collapse>
        <UI.Nav className="nav-tabs">
          <UI.Nav.Link to="/posts" disabled>
            Posts
          </UI.Nav.Link>
          <UI.Nav.Link to="/about">Main</UI.Nav.Link>
          <UI.Nav.Link to="/about">Link</UI.Nav.Link>
          <UI.Nav.Link to="/about">About</UI.Nav.Link>
        </UI.Nav>
        <UI.Nav className="d-block ml-auto">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="darkmode-toggler ml-auto"
              onChange={(e) => setDarkmode(e.target.checked)}
            />
          </div>
        </UI.Nav>
      </UI.Navbar.Collapse>
    </UI.Navbar>
  );
}

export default Navbar;
