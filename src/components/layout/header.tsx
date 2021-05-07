import React from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../App";
export const Header = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse">
          {/* Brand/logo */}
          <a className="navbar-brand" href="/">
            <img
              src="/mgr-logo.png"
              alt="logo"
              style={{ width: "25px", height: "40px" }}
            />
          </a>
          <NavLink className="navbar-brand" to="/">
            My React Demo App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/news"
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/examples"
                >
                  Examples
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/user"
                >
                  User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>

          <span style={{ color: "#fff" }}>Rabbani</span>
        </div>
      </nav>
    </div>
  );
};
