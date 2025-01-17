import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li style={{listStyle: "none"}}>
            <Link to="/"></Link>
          </li>
          {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;