import Nav from "../Nav";

function Logo({ children, to, className, ...props }) {
  props.className = ["navbar-logo", className].filter(Boolean).join(" ");

  return (
    <Nav.Link to={to} {...props}>
      {children}
    </Nav.Link>
  );
}

export default Logo;
