import React from "react";
import {Link} from "react-router-dom"
import "../assets/styles/home.css"
import User from "../Components/User";
import Title from "../Components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    return(
        <main className="bg-contact p-5">
            <div className="container bg-white">
                <Title title="Me contacter" subTitle="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."/>
                <div className="row">
                    <div className="col-md-6 text-start px-4">
                        <div className="border-bottom border-primary border-2 opacity-100">
                            <h2>Formulaire de contact</h2>
                        </div>
                        <form className="row g-3 needs-validation m-3" novalidate>
                            <div >
                                <label for="name" className="form_label" ></label>
                                <input type="text" className="form-control" id="name" placeholder="Votre nom" />
                                <div className="valid-feedback">
                                        Looks good!
                                </div>
                            </div>
                            <div>
                                <label for="mail" className="form-label"></label>
                                <input type="email" className="form-control" id="mail" placeholder="Votre adresse mail"/>
                                <div className="valid-feedback">
                                        Looks good!
                                </div>
                            </div>
                            <div >
                                <label for="phonenumber" className="form_label" ></label>
                                <input type="tel" className="form-control" id="phonenumber" placeholder="Votre numéro" />
                                <div className="valid-feedback">
                                        Looks good!
                                </div>
                            </div>
                            <div >
                                <label for="object" className="form_label" ></label>
                                <input type="text" className="form-control" id="object" placeholder="Sujet"/>
                                <div className="valid-feedback">
                                        Looks good!
                                </div>
                            </div>
                            <div>
                                <label for="Textarea" className="form-label"></label>
                                <textarea className="form-control" id="Textarea" rows="3"placeholder="Votre message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary col-4 mx-auto">Envoyer</button>
                        </form>

                    </div>
                    <div className="col-md-6 text-start">
                        <div className="border-bottom border-primary border-2 opacity-100">
                            <h2>Mes coordonnées</h2>
                        </div>
                        <div>
                            <FontAwesomeIcon
                            icon={faLocationDot}
                            style={{ color: "#444" }}
                            />
                            <address style={{ display: "inline" }}>
                                <Link
                                    to="https://maps.app.goo.gl/L6rbq1wzeTKh7EzC9"
                                    target="_blank"
                                > {User.adresse1}, {User.adresse2}
                                </Link>
                            </address>
                        </div>
                        <div>
                            <FontAwesomeIcon
                            icon={faMobileScreenButton}
                            style={{ color: "#444" }}
                            />
                            <Link to="tel: 06.20.30.40.50"> {User.tel}</Link>
                        </div>
                        <div className="mt-2">
                            <iframe
                                title="Carte de l'adresse de John Doe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540984!2d4.796403976654687!3d45.778665712401626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1697399358793!5m2!1sfr!2sfr"
                                style={{ border: 0, width: "100%", height: "250px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>    
                </div>
            </div>    
        </main>
    )
}

export default Contact