/**
 * @param {Object} props
 * @param {"light" | "dark" | "primary" | "secondary" | "info" | "success" | "danger" | "warning"} props.bg
 */
function Button({ children, bg = "primary", className, ...props }) {
  className = [`btn bg-${bg}`, className].filter(Boolean).join(" ");

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

function createButton(bg) {
  return function (props) {
    return Button({ ...props, bg });
  };
}

export default Object.assign(Button, {
  Primary: createButton("primary"),
  Secondary: createButton("secondary"),
  Info: createButton("info"),
  Success: createButton("success"),
  Danger: createButton("danger"),
  Warning: createButton("warning"),
  Dark: createButton("dark"),
  Light: createButton("light"),
});
