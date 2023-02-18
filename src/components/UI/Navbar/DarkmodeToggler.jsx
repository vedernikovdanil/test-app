import React from "react";

const THEME_STORAGE_KEY = "darkmode";
const DARK_CLASS = "bg-dark";
const LIGHT_CLASS = "bg-light";

function DarkmodeToggler() {
  const getThemeName = (darkmode) => (darkmode ? DARK_CLASS : LIGHT_CLASS);

  const [darkmode, setDarkmode] = React.useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) === "true";
  });

  React.useEffect(() => {
    document.documentElement.classList.add(getThemeName(darkmode));
    localStorage.setItem(THEME_STORAGE_KEY, darkmode);
    return () => {
      document.documentElement.classList.remove(getThemeName(darkmode));
    };
  }, [darkmode]);

  return (
    <input
      type="checkbox"
      className="darkmode-toggler"
      checked={darkmode}
      onChange={(e) => setDarkmode(e.target.checked)}
    />
  );
}

export default DarkmodeToggler;
