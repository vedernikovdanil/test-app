import * as UI from "../UI";

function Navbar() {
  return (
    <UI.Navbar breakpoint="md" isDark={true}>
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
      </UI.Navbar.Collapse>
    </UI.Navbar>
  );
}

export default Navbar;
