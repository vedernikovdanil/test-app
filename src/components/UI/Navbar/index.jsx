import Logo from "./Logo";
import Collapse from "./Collapse";

/**
 * @param {Object} props
 * @param {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} props.breakpoint
 * @param {"light" | "dark" | "primary" | "secondary" | "success" | "danger" | "warning"} props.variant
 */
function Navbar({
  children,
  breakpoint = "xs",
  variant = "light",
  className,
  ...props
}) {
  props.className = [
    "navbar",
    `navbar-${breakpoint}`,
    `bg-${variant}`,
    className,
  ].join(" ");
  return (
    <nav {...props}>
      <div className="container">{children}</div>
    </nav>
  );
}

export default Object.assign(Navbar, {
  Logo,
  Collapse,
});
