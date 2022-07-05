import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dg3Logo from "../../assets/img/dg3.png";

const Navbar = () => {
  const locationObj = useLocation();
  const currentRoute = locationObj.pathname;

  return (
    <header className="site-header py-3 sticky-top bg-primary shadow">
      <nav className="container d-flex flex-column flex-md-row justify-content-between">
        <Link className="py-2" to="/" aria-label="Logo">
          <img src={Dg3Logo} alt="Dg3 Logo" />
        </Link>
        <Link
          className={`py-2 d-none d-md-inline-block ${
            currentRoute === "/" && "active"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`py-2 d-none d-md-inline-block ${
            currentRoute === "/pages/updates" && "active"
          }`}
          to="pages/updates"
        >
          Updates
        </Link>
        <Link
          className={`py-2 d-none d-md-inline-block ${
            currentRoute === "/pages/knowledge" && "active"
          }`}
          to="pages/knowledge"
        >
          Knowledge Libray
        </Link>
        <Link
          className={`py-2 d-none d-md-inline-block ${
            currentRoute === "/pages/faq" && "active"
          }`}
          to="pages/faq"
        >
          FAQ
        </Link>
        <Link
          className={`py-2 d-none d-md-inline-block ${
            currentRoute === "/pages/templates" && "active"
          }`}
          to="pages/templates"
        >
          Templates
        </Link>
        <Link className="py-2 d-none d-md-inline-block" to="pages/codes">
          Codes
        </Link>
        <Link className="py-2 d-none d-md-inline-block" to="pages/projects">
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
