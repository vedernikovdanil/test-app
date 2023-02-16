/**
 * @param {Object} props
 * @param {"light" | "dark" | "primary" | "secondary" | "success" | "danger" | "warning"} props.variant
 */
function Button({ children, variant = "primary", className, ...props }) {
  className = [`btn bg-${variant}`, className].join(" ");
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

function createButton(variant) {
  return function (props) {
    return Button({ ...props, variant });
  };
}

export default Object.assign(Button, {
  Primary: createButton("primary"),
  Secondary: createButton("secondary"),
  Success: createButton("success"),
  Danger: createButton("danger"),
  Warning: createButton("warning"),
  Dark: createButton("dark"),
  Light: createButton("light"),
});
