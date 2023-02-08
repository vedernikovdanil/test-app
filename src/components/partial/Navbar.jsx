import Nav from "../UI/Nav";

function Navbar() {
  return (
    <Nav breakpoint="lg" className="container">
      <Nav.Logo to="/">Logo</Nav.Logo>
      <Nav.Collapse>
        <Nav.List>
          <Nav.Link to="/posts" disabled>
            Posts
          </Nav.Link>
          <Nav.Link to="/about">About</Nav.Link>
        </Nav.List>
      </Nav.Collapse>
    </Nav>
  );
}

export default Navbar;
