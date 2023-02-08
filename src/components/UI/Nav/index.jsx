import List from "./List";
import Link from "./Link";
import Logo from "./Logo";
import Collapse from "./Collapse";

/**
 * @param {Object} prop
 * @param {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} prop.breakpoint
 */
function Nav({ children, breakpoint = "xs", className, ...props }) {
  className = "navbar-container" + (className ? ` ${className}` : "");
  return (
    <nav className={`navbar navbar-${breakpoint}`}>
      <div className={className} {...props}>
        {children}
      </div>
    </nav>
  );
}

export default Object.assign(Nav, {
  List,
  Link,
  Logo,
  Collapse,
});
