function Item({ children, to, disabled = false, className, ...props }) {
  props.className = ["nav-item", className].join(" ");
  return <li {...props}>{children}</li>;
}

export default Item;
