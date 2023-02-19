function List({ children, className, ...props }) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  props.className = ["nav-list", className].filter(Boolean).join(" ");

  return <ul {...props}>{children}</ul>;
}

export default List;
