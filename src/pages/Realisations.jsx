import React from "react";
import "../assets/styles/home.css"
import Card from "../Components/Card";
import Title from "../Components/Title";

import food from "../assets/pictures/portfolio/fresh-food.jpg";
import restaurant from "../assets/pictures/portfolio/restaurant-japonais.jpg";
import zen from "../assets/pictures/portfolio/espace-bien-etre.jpg";
import banner from "../assets/pictures/banner.jpg";


const Realisation = () =>  {
    return (
       <main>
            <img src={banner} alt="image bleue avec des trainées blanches" />
            <Title title="Portfolio" projectdescription="Voici quelques-unes de mes réalisations"/>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                <Card 
                image={food}
                imgdescription="Image de légumes"
                title="Fresh Food"
                projects="Réalisation d'un site avec commande en ligne"
                techno="PHP et MySQL"
                />
                  <Card 
                image={restaurant}
                imgdescription="Image de sushis"
                title="Restaurant Akira"
                projects="Réalisation d'un site vitrine"
                techno="Wordpress"
                />
                  <Card 
                image={zen}
                imgdescription="Image de légumes"
                title="Espace bien-être"
                projects="Réalisation d'un site vitrine pour un praticien bien-être"
                techno="HTML/CSS"
                />

            </div>
        </main>
    )
}

export default Realisation
