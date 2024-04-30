import React, { useState, useEffect } from "react";
import "../assets/styles/home.css";
import User from "../Components/User";
import Up from "../Components/Up";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSquareTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Arrow = () => {
  return <FontAwesomeIcon icon={faChevronRight} style={{ color: "#0d6efd" }} />;
};

const Footer = () => {
  const [link, setLink] = useState([]);
  const getLink = async () => {
    const reponse = await fetch("https://api.github.com/users/github-john-doe");
    const json = await reponse.json();
    setLink(json);
  };
  useEffect(() => {
    getLink();
  }, []);
  return (
    <footer>
      <div className="row bg-footer m-5 text-start">
        <section className=" col-md-6 col-lg-3">
          <address>
            <h5 className="mb-2">
              {User.firstName} {User.lastName}
            </h5>
            <p>{User.adresse1}</p>
            <p>{User.adresse2}</p>
            <p>
              Téléphone:
              <Link to={`tel: ${User.tel}`} className="text-primary">
                {User.tel}
              </Link>
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/L6rbq1wzeTKh7EzC9"
                target="_blanck"
              >
                <FontAwesomeIcon icon={faGithub} className="mx-2 fa-xl" />
              </a>
              <a
                href="https://maps.app.goo.gl/L6rbq1wzeTKh7EzC9"
                target="_blanck"
              >
                <FontAwesomeIcon
                  icon={faSquareTwitter}
                  className="mx-2 fa-xl"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/L6rbq1wzeTKh7EzC9"
                target="_blanck"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mx-2 fa-xl" />
              </a>
            </p>
          </address>
        </section>
        <section className="col-md-6 col-lg-3">
          <h5>Liens utiles</h5>
          <ul>
            <li>
              <Link to="/">
                <Arrow /> Accueil
              </Link>
            </li>
            <li>
              <Link to="/#about">
                <Arrow /> Á propos
              </Link>
            </li>
            <li>
              <Link to="/services">
                <Arrow /> Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Arrow /> Me contacter
              </Link>
            </li>
            <li>
              <Link to="/mentions">
                <Arrow /> Mentions Légales
              </Link>
            </li>
          </ul>
        </section>
        <section className="col-md-6 col-lg-3">
          <h5>Mes dernières réalisations</h5>
          <ul>
            <li>
              <Link to="#">
                <Arrow /> Fresh food
              </Link>
            </li>
            <li>
              <Link to="#">
                <Arrow /> Restaurant Akira
              </Link>
            </li>
            <li>
              <Link to="#">
                <Arrow /> Espace bien-être
              </Link>
            </li>
          </ul>
        </section>
        <section className="md-6 col-lg-3">
          <h5>Mes dernièrs articles</h5>
          <ul>
            <li>
                <Arrow />
                <Link to="#">Coder son site en HTML/CSS</Link>
            </li>
            <li>
                <Arrow />
                <Link to="#">Vendre ses produits sur le web</Link>
            </li>
            <li>
                <Arrow />
                <Link to="#">Se positionner sur Google</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="bg-dark text-light p-3">
         <Up/>
        <small>
          &copy; Designed by {User.firstName} {User.lastName}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
