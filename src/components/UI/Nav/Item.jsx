function Item({ children, to, disabled = false, className, ...props }) {
  props.className = ["nav-item", className].filter(Boolean).join(" ");

  return <li {...props}>{children}</li>;
}

export default Item;
