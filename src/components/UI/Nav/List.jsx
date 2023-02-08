function List({ children, className, ...props }) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  className = "nav-list" + (className ? ` ${className}` : "");
  return (
    <ul className={className} {...props}>
      {[...children].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
