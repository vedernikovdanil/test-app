function List({ children, className, ...props }) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  props.className = ["nav-list", className].join(" ");
  return (
    <ul {...props}>
      {[...children].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
