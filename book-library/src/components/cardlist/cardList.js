import { useEffect, useState } from "react";
import Card from "../card";


function CardList (){
    const[bookList,setBookList]=useState([]);

    useEffect(()=>{

        fetch('https://iifsd.herokuapp.com/books')
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                setBookList(data);

            })
    },[])
    return (
        <div className="container card-list__wrapper">
            <div className="card-list">
                {bookList.map((book)=>(
                    <Card key={book.id} id={book.id} title={book.book_title} image={book.cover_url} description={book.book_short_description} />
                ))}
            </div>

        </div>
    )

}


export default CardList;