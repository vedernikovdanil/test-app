import React from "react";
import * as UI from "../UI";

function Navbar() {
  const [darkmode, setDarkmode] = React.useState(false);
  return (
    <UI.Navbar breakpoint="md" bg={darkmode ? "dark" : "light"}>
      <UI.Navbar.Logo to="/">Logo</UI.Navbar.Logo>
      <UI.Navbar.Collapse>
        <UI.Nav>
          <UI.Nav.Link to="/posts" disabled>
            Posts
          </UI.Nav.Link>
          <UI.Nav.Link to="/about">Main</UI.Nav.Link>
          <UI.Nav.Link to="/about">Link</UI.Nav.Link>
          <UI.Nav.Link to="/about">About</UI.Nav.Link>
        </UI.Nav>
        <div className="d-flex justify-content-end gap-3">
          <input
            className="darkmode-toggler"
            type="checkbox"
            onChange={(e) => setDarkmode(e.target.checked)}
          />
        </div>
      </UI.Navbar.Collapse>
    </UI.Navbar>
  );
}

export default Navbar;
