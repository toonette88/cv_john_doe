import React from "react";
import "../assets/styles/home.css"
import ServCard from "../Components/ServCard";
import Title from "../Components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDisplay, faFileCode, faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons"
import banner from "../assets/pictures/banner.jpg";

const Services = () => {
    return(
        <main>
            <img src={banner} alt="image bleue avec des trainées blanches" className="img-fluid"/>
            <Title title="Mon offre de services" subTitle="Voici les prestations sur lesquelles je peux intervenir" />
            <div className="container">
                <div className="row">
                    <ServCard 
                    image={<FontAwesomeIcon icon={faDisplay} className="fa-2xl m-3 icon" />}
                    title="UX Design"
                    description={
                        <span>L'<strong> UX Design </strong>est une méthode de conception centrée sur l'utilisateur. 
                        Son but est d'offrir une expérience de navigation optimale à l'internaute</span>
                    }
                    />
                    <ServCard 
                    image={<FontAwesomeIcon icon={faFileCode} className="fa-2xl m-3 icon" />}
                    title="Développement Web"
                    description={
                        <span>Le<strong> développement de site web </strong> repose sur l'utilisation des langages 
                        <span className="dotted">html</span>,<span className="dotted">css</span>,JavaScript et <span className="dotted">php</span>.</span>
                    }
                    />
                    <ServCard
                    image={<FontAwesomeIcon icon={faMagnifyingGlassDollar} className="fa-2xl m-3 icon"/>}
                    title="Référencement"
                    description={
                        <span>Le <strong> référencement naturel d'un site </strong>, aussi appelé <span className="dotted"> seo</span>, consiste à mettre 
                        des techniques en oeuvres pour <span className="italic">améliorer sa position </span> dans les résultats des moteurs de recherche.</span>}
                        />
                </div>
            </div>
        </main>
    )
}
export default Services;