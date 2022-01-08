import React from "react";

function Card({title, image, description,autherURL,autherName}){
    return (
        
    <>
        <div class="container card-list-wrapper">
            <div class="card-list">
                <div class="card">
                    <a href="https://google.com" className="card__title">{title}</a>
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
      
            </div>
        </div>
        </>
    )
}

export default Card;