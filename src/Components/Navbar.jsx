import React from "react";
import { Link } from "react-router-dom";
import User from "../Components/User";

const NavBar = () => {
  return (
    <header>
      <nav
        class="navbar navbar-dark navbar-expand-lg bg-dark border-bottom border-body text-light text-uppercase fixed-top "
        id="mainNav"
      >
        <div class="container">
          <Link className="navbar-brand text-light text-uppercase" to="/">
            {User.firstName} {User.lastName}
          </Link>
          <button
            className="navbar-toggler text-uppercase text-light rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase text-start m-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/realisations">
                  Réalisations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Me contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

