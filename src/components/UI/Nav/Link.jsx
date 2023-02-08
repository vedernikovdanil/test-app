import { NavLink } from "react-router-dom";

function Link({ children, to, disabled = false, className, ...props }) {
  className = "nav-link" + (className ? ` ${className}` : "");
  if (disabled) {
    props.tabIndex = -1;
  }
  return (
    <NavLink aria-disabled={disabled} to={to} className={className} {...props}>
      {children}
    </NavLink>
  );
}

export default Link;
