import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="navbar navbar-expand-lg navbar-dark bg-dark p-3 pt-0 pb-0">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
