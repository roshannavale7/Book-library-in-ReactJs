import React from "react";
import Button from "./Button/Button";


function Hero({title, subTitle, ctaText, ctaSubText}){
    return (
        <div class="hero">

            <div class="hero__container container">

                <div class="hero__text">
                    <h2 class="hero__title">
                        {title}
                        
                    </h2>
                 
                    <div class="hero__subtitle">
                        {subTitle}
                       
                    </div>
        
                    <button  class="btn hero__btn btn--large btn--white">
                        {ctaText}
                    </button>
        
                    <div class="hero__under-btn under-btn">
                        {ctaSubText}
                        
                    </div>
                </div>   
            </div>
        </div>
      
    )
};

export default Hero;