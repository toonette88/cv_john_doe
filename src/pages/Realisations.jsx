import React from "react";
import Card from "../Components/Card";
import Title from "../Components/Title";

import food from "../assets/pictures/portfolio/fresh-food.jpg";
import restaurant from "../assets/pictures/portfolio/restaurant-japonais.jpg";
import zen from "../assets/pictures/portfolio/espace-bien-etre.jpg";
import banner from "../assets/pictures/banner.jpg";


const Realisation = () =>  {
    return (
       <main>
            <img src={banner} alt="image bleue avec des trainées blanches" className="img-fluid" />
            <Title title="Portfolio" subTitle="Voici quelques-unes de mes réalisations"/>
            <div className="container">
              <div className="row">
                <Card 
                image={food}
                imgdescription="Image de légumes"
                title="Fresh Food"
                projects="Réalisation d'un site avec commande en ligne"
                button="Voir"
                footer="PHP et MySQL"
                />
                  <Card 
                image={restaurant}
                imgdescription="Image de sushis"
                title="Restaurant Akira"
                projects="Réalisation d'un site vitrine"
                button="Voir"
                footer="Wordpress"
                />
                  <Card 
                image={zen}
                imgdescription="Image de légumes"
                title="Espace bien-être"
                projects="Réalisation d'un site vitrine pour un praticien bien-être"
                button="Voir"
                footer="HTML/CSS"
                />
               </div>
            </div>
        </main>
    )
}

export default Realisation;
