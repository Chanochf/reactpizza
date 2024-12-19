import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";
const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/About_us" >About_us</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
