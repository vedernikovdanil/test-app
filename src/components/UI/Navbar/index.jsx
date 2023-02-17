import Logo from "./Logo";
import Collapse from "./Collapse";

/**
 * @param {Object} props
 * @param {"light" | "dark" | "primary" | "secondary" | "success" | "danger" | "warning"} props.bg
 */
function Navbar({ children, bg, className, ...props }) {
  props.className = ["navbar", bg && `bg-${bg}`, className].join(" ");
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
