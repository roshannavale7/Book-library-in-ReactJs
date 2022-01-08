import { useState } from "react";

function Create (){
    const[bookTitle,setBookTitle]=useState('');
    const[favSubject,setFavSubject]=useState('');
    const[err,setError]=useState('');
    async function handleSubmit(e){
        e.preventDefault();

        if (!bookTitle){
            setError('Book title is required')
            return;

        }
        if(!favSubject){
            setError('FavSubject is required')
            return;

        }
        try {
            const response = await fetch('https://iifsd.herokuapp.com/students', {
            method:'POST',
            headers: {
            'content-type':'application/json',

            },
            body:JSON.stringify({
                name:bookTitle,
                favSubject:'javascript'
                }),
            });

            if(!response.ok){
                throw new Error("Server responds with Error!")
                
            }
            const data=await response.json();
            console.log(data);

        }catch(error){
            console.log(error);
            setError(error);
        }
    }

    return(
        <div className="page_create">
            ERR:{err &&<p className="msg msg--error">{err.toString()}</p>}
            <h1>Craete a Book</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="book title" value={bookTitle} onChange={(e)=>{setError();setBookTitle(e.target.value)}}/>
                <input placeholder="Fav Subject" value={favSubject} onChange={(e)=>{setError();setFavSubject(e.target.value)}}/>
                

                <button type="submit">Submit</button>
            </form>
        </div>
    )
        
    
}

export default Create;