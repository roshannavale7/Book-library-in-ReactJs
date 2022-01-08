import React from "react";

function BookDetail (){
    return (
        <div class="book-detail">
            <div class="container">
                <div class="book-detail__left">
                    <img
                    class="book-detail__img"
                    src="https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/510417754/396x396/e1986f8af6/1632395555?v=1"
                    />
                </div>
                <div class="book-detail__right">
                    <h1 class="book-detail__title"><a href="#">The Afganisthan Papers: A secret history of the war</a></h1>
                    <div class="book-detail__author">Written by <a href="#">Author Name</a></div>
        
                    <hr class="rule"></hr>
        
                    <div class="book-detail__description">
                        <div class="_3939a6 description _1rtTp9" data-e2e="description"><b>“THE BOOK CHINA DOESN'T WANT YOU TO READ.”—CNN&ZeroWidthSpace;</b><br></br> <br></br><b>A riveting insider's story of how the Party and big money work in China today, by a man who, with his wife, Whitney Duan, rose to the zenith of power and wealth—and then fell out of favor. She was disappeared four years ago. News of this book led to a phone call from Whitney, proof that she's alive.</b><br></br><br></br>As Desmond Shum was growing up impoverished in China, he vowed his life would be different.<br></br> <br></br>Through hard work and sheer tenacity he earned an American college degree and returned to his native country to establish himself in business. There, he met his future wife, the highly intelligent and equally ambitious Whitney Duan who was determined to make her mark within China’s male-dominated society. Whitney and Desmond formed an effective team and, aided by relationships they formed with top members of China’s Communist Party, the so-called red aristocracy, he vaulted into China’s billionaire class. Soon they were developing the massive air cargo facility at Beijing International Airport, and they followed that feat with the creation of one of Beijing’s premier hotels. They were dazzlingly successful, traveling in private jets, funding multi-million-dollar buildings and endowments, and purchasing expensive homes, vehicles, and art.<br></br> <br></br>But in 2017, their fates diverged irrevocably when Desmond, while residing overseas with his son, learned that his now ex-wife Whitney had vanished along with three coworkers.<br></br> <br></br>This is both Desmond’s story and Whitney’s, because she has not been able to tell it herself.</div>
                        </div>
        
                    <div class="book-detail__pill-list">
                        <ul class="pill-list">
                            <li class="pill-list__item"><a href="#">Business</a></li>
                            <li class="pill-list__item"><a href="#">Personal memories</a></li>
                            <li class="pill-list__item"><a href="#">Asia</a></li>
                            <li class="pill-list__item"><a href="#">Business</a></li>
                            <li class="pill-list__item"><a href="#">Business</a></li>
                            <li class="pill-list__item"><a href="#">Business</a></li>
                            <li class="pill-list__item"><a href="#">Business</a></li>
                        </ul>
                    </div>
        
                    <div class="book-detail__product-metadata">
                        <ul class="product-metadata">
                            <li class="product-metadata__item"><span>Publisher:</span><a href="#">Business</a></li>
                            <li class="product-metadata__item"><span>Released:</span><a href="#">Personal memories</a></li>
                            <li class="product-metadata__item"><span>ISBN:</span><a href="#">Asia</a></li>
                            <li class="product-metadata__item"><span>Format:</span><a href="#">Business</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BookDetail;