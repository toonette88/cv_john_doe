import React from "react";
import Skill from "../Components/Skill";
import "../assets/styles/home.css"

import image2 from "../assets/pictures/john-doe-about.jpg";
import User from "../Components/User";


const Home = () => {
  return (
    <main>
      <div className="bg-image bg-home d-flex align-items-center justify-content-center text-center text-light">
        <div>
          <h1> Bonjour, je suis {User.firstName} {User.lastName}</h1>
          <h2>Développeur web full stack</h2>
          <a
            className="btn btn-primary m-3"
            type="link"
            role="button"
            href="/#about"
          >
            En savoir plus
          </a>
        </div>
      </div>
      <article id="about" className="bg-white shadow my-5 p-5 m-md-5 row">
        <div className="text-start col-md-6">
          <h3>À propos</h3>
          <hr className="border border-primary border-1 opacity-100" />
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d'<strong>intégrateur-dévelopeur web</strong>{" "}
            au CEF. Au cours de cette formation, j'ai pu acquérir des bases
            solides pour travailler dans le domaine du{" "}
            <strong>développement web</strong>.
          </p>
          <p>
            Basé à Lyon, je suis en recherche d'une alternance au sein d'un
            agence digitale pour consolider ma formation de{" "}
            <strong>développeur web full stack</strong>.
          </p>
          <p>
            J'accorde une attention particulière à la qualité du code que
            j'écris et je respecte les bonne pratiques du web.
          </p>
        </div>
        <div className="text-start col-md-6">
          <img
            src={image2}
            className="rounded img-fluid"
            alt="Tête d'un homme de profil en train de travailler dans un bureau"
          />
          <h4 className="my-2">Mes compétences</h4>
          <Skill skill="HTML" progress="90" color="danger" />
          <Skill skill="CSS3" progress="80" color="info" />
          <Skill skill="JAVASCRIPT" progress="70" color="warning" />
          <Skill skill="PHP" progress="60" color="success" />
          <Skill skill="REACT" progress="50" />
        </div>
      </article>
    </main>
  );
};

export default Home;
