import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBarLogo from "../../assets/img/dg3.png";

const Navbar = () => {
  const locationObj = useLocation();
  const currentRoute = locationObj.pathname;

  return (
    <header className="site-header py-3 sticky-top bg-primary shadow">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="#">
            <img src={NavBarLogo} alt="Logo" width="30" height="24" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto gap-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${currentRoute === "/" && "active"}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/pages/updates" && "active"
                  }`}
                  aria-current="page"
                  to="pages/updates"
                >
                  Updates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/pages/knowledge" && "active"
                  }`}
                  aria-current="page"
                  to="pages/knowledge"
                >
                  Knowledge Libray
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/pages/faq" && "active"
                  }`}
                  aria-current="page"
                  to="pages/faq"
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/pages/templates" && "active"
                  }`}
                  aria-current="page"
                  to="pages/templates"
                >
                  Templates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/pages/codes" && "active"
                  }`}
                  aria-current="page"
                  to="pages/codes"
                >
                  Codes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/pages/projects" && "active"
                  }`}
                  aria-current="page"
                  to="pages/projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
