import React from "react";
import Card from "../Components/Card";
import Title from "../Components/Title";

import blog1 from "../assets/pictures/blog/coder.jpg";
import blog2 from "../assets/pictures/blog/croissance.jpg";
import blog3 from "../assets/pictures/blog/google.jpg";
import blog4 from "../assets/pictures/blog/screens.jpg";
import blog5 from "../assets/pictures/blog/seo.jpg";
import blog6 from "../assets/pictures/blog/technos.png";
import banner from "../assets/pictures/banner.jpg";

const Blog = () =>  {
    return (
       <main>
            <img src={banner} alt="image bleue avec des trainées blanches" />
            <Title title="Blog" projectdescription="Retrouver ici quelques articles sur le développement web"/>
            <div className="container">
                <div className="row text-start ">
                    <Card 
                    image={blog1}
                    imgdescription="ligne de code"
                    title="Coder son site en HTML/CSS"
                    projects="Some quick example text to build on the card title and make up the bulk of the card's content "
                    button="Lire la suite"
                    footer="Publié le 22 août 2022"
                    />
                    <Card 
                    image={blog2}
                    imgdescription="rangée de piles de pièces grandissantes surmontées de plantes"
                    title="Vendre ses produits sur le web"
                    projects="Some quick example text to build on the card title and make up the bulk of the card's content "
                    button="Lire la suite"
                    footer="Publié le 20 août 2022"
                    />
                    <Card 
                    image={blog3}
                    imgdescription="ordinateur portable ouvert affichant la page d'accueil de google"
                    title="Se positionner sur Google"
                    projects="Some quick example text to build on the card title and make up the bulk of the card's content "
                    button="Lire la suite"
                    footer="Publié le 1 août 2022"
                    />
                    <Card 
                    image={blog4}
                    imgdescription="mac, mac book et ipad sur un bureau"
                    title="Coder en responsive design"
                    projects="Some quick example text to build on the card title and make up the bulk of the card's content "
                    button="Lire la suite"
                    footer="Publié le 31 juillet 2022"
                    />
                    <Card 
                    image={blog5}
                    imgdescription="image contenant plein de mots blanc sur fond bleu avec au centre SEO"
                    title="Techniques de référencement"
                    projects="Some quick example text to build on the card title and make up the bulk of the card's content "
                    button="Lire la suite"
                    footer="Publié le 30 juillet 2022"
                    />
                    <Card 
                    image={blog6}
                    imgdescription="tableau de technologies de programmation"
                    title="Apprendre à coder"
                    projects="Some quick example text to build on the card title and make up the bulk of the card's content "
                    button="Lire la suite"
                    footer="Publié le 12 juillet 2022"
                    />
                
                </div>
            </div>
        </main>
    )
}

export default Blog;
