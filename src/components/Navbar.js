import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand"
              src="https://w7.pngwing.com/pngs/818/1015/png-transparent-360-degree-feedback-management-research-analysis-others-association-european-time.png"
              alt="Re"
            />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/register">
                  {props.title}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/help">
                      Help and Support
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="mode-toggle">              
              <label className="dark-light">
                <h5>Dark Mode</h5>
              </label>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={props.darkMode}
                  onChange={props.toggle}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'NavLink Here'
};  