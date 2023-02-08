import { Outlet } from "react-router-dom";
import Navbar from "./components/partial/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
