import { NavLink } from "react-router-dom";

function Link({ children, to, disabled = false, className, ...props }) {
  props.className = ["nav-link", className].filter(Boolean).join(" ");

  if (disabled) {
    props.tabIndex = -1;
  }

  return (
    <NavLink aria-disabled={disabled} to={to} {...props}>
      {children}
    </NavLink>
  );
}

export default Link;
