import { NavLink } from "react-router-dom";

function Logo({ children, to, className, ...props }) {
  className = "nav-logo" + (className ? ` ${className}` : "");
  return (
    <NavLink to={to} className={className} {...props}>
      {children}
    </NavLink>
  );
}

export default Logo;
