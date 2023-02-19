import React from "react";

function Collapse({ children, className, ...props }) {
  const toggleRef = React.useRef(null);
  const collapseRef = React.useRef(null);

  React.useEffect(() => {
    setHeight();
    const hide = ({ target: el }) => {
      if (!el.closest(".navbar") || el.tagName === "A") {
        toggleRef.current.checked = false;
      }
    };
    window.addEventListener("click", hide);
    return () => window.removeEventListener("click", hide);
  }, []);

  function setHeight() {
    const height = collapseRef.current.scrollHeight;
    collapseRef.current.style.setProperty("--height", `${height}px`);
  }

  props.className = ["navbar-collapse", className].filter(Boolean).join(" ");

  return (
    <>
      <input
        type="checkbox"
        className="navbar-toggler"
        ref={toggleRef}
        onChange={setHeight}
      />
      <div {...props} ref={collapseRef}>
        {children}
      </div>
    </>
  );
}

export default Collapse;
