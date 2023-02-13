import Logo from "./Logo";
import Collapse from "./Collapse";

/**
 * @param {Object} props
 * @param {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} props.breakpoint
 * @param {"" | "primary" | "secondary" | "success" | "danger" | "warning"} props.variant
 */
function Navbar({
  children,
  breakpoint = "xs",
  variant = "",
  isDark = false,
  className,
  ...props
}) {
  props.className = [
    "navbar",
    `navbar-${breakpoint}`,
    className,
    isDark && "navbar-dark",
    variant && `bg-${variant}`,
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
