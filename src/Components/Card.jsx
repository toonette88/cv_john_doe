import React from "react";
import { Link } from "react-router-dom"

const Card = (props) =>  {
    return(
        <div className="col">
            <div className="card">
                <img src={props.image}  className="card-img-top " alt={props.imgdescription}/>
                <div  className="card-body">
                    <h5  className="card-title">{props.title}</h5>
                    <p  className="card-text">{props.projects}</p>
                    <Link to="#"  className="btn btn-primary">Voir</Link>
                </div>
                <div  className="card-footer text-body-secondary">
                    <p>Site réalisé avec {props.techno}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;