import React from "react";

function Collapse({ children, className, ...props }) {
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    const hide = ({ target: el }) => {
      if (!el.closest(".navbar") || el.nodeName === "A")
        isShown() && collapse();
    };
    [...document.children].forEach((el) => {
      el.addEventListener("click", hide);
    });
    return () => {
      [...document.children].forEach((el) => {
        el.removeEventListener("click", hide);
      });
    };
    // eslint-disable-next-line
  }, []);

  function collapse() {
    const el = contentRef.current;
    if (el.classList.contains("collapsing")) return;
    if (!isShown()) {
      el.classList.replace("collapse", "collapsing");
      el.style.height = `${el.scrollHeight}px`;
    } else {
      el.style.height = `${el.scrollHeight}px`;
      el.classList.replace("collapse", "collapsing");
      setTimeout(() => (el.style.height = ""), 0);
    }
    const complete = () => {
      el.classList.replace("collapsing", "collapse");
      el.classList.toggle("show");
      el.style.height = "";
    };
    setTimeout(complete, 350);
  }

  function isShown() {
    return contentRef.current.classList.contains("show");
  }

  className = "nav-collapse collapse" + (className ? ` ${className}` : "");
  return (
    <>
      <button className="nav-toggler" onClick={collapse} />
      <div className={className} ref={contentRef} {...props}>
        {children}
      </div>
    </>
  );
}

export default Collapse;
