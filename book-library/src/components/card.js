import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, image, description,autherURL,autherName}){
    return (
        
        <div class="card">
            
            <Link className="card__title" to={`/book/${id}`} >{title}</Link>

            <img
            class="card__img"
            alt="Awesome Book Cover"
            src={image}
            />
            <div class="card__description">
                {description}
            </div>
            <a class="card__author" href={autherURL}>{autherName}</a>
        </div>

         
    )
}

export default Card;