import Item from "./Item";

function List({ children, className, autoWrap = false, ...props }) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  props.className = ["nav-list", className].join(" ");

  if (autoWrap) {
    children = [...children].map((item, index) => (
      <Item key={index}>{item}</Item>
    ));
  }

  return <ul {...props}>{children}</ul>;
}

export default List;
