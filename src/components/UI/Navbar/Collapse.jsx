import React from "react";
import { queueCallback } from "../utils";

function Collapse({ children, className, ...props }) {
  const btnRef = React.useRef(null);
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    const hide = ({ target: el }) => {
      if (!el.closest(".navbar") || el.nodeName === "A") {
        isShown() && collapse();
      }
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
    const el = rootRef.current;
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
    queueCallback(complete, el);
  }

  function isShown() {
    return rootRef.current.classList.contains("show");
  }
  props.className = ["navbar-collapse collapse", className].join(" ");
  return (
    <>
      <button className="navbar-toggler" onClick={collapse} ref={btnRef} />
      <div ref={rootRef} {...props}>
        {children}
      </div>
    </>
  );
}

export default Collapse;
