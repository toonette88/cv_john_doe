import React from "react";

const ServCard = (props) =>  {
    return(
        <div className="col-md-4 ">
            <div className="card mb-3">
                {props.image}
                <div  className="card-body">
                    <h5  className="card-title text-uppercase">{props.title}</h5>
                    <p  className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default ServCard;