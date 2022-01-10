import { useEffect, useState } from "react";
import BookDetail from "../components/Book-Detail";
import BookHeading from "../components/Book-heading";


function Detail(props){
    const id = props.match.params.id;

    const [book,setBook]=useState({});
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchBook=async () =>{
            try{
                const response = await fetch(`https://iifsd.herokuapp.com/books/${id}`);

                if(!response.ok){
                    throw new Error("Server respond with Error!")
                }
                const data = await response.json();
                setLoading(false);
                setBook(data);
            }catch {
                setLoading(false);
            }
        }
        fetchBook();

    },[id,loading])

    return(
        <div className="page_book">
            
        {/* <BookHeading/>
        <BookDetail/> */}
        {loading && <p>Loading book from Server.....</p>}

        {!loading &&
            <>
                {book.id &&
                    <>
                        <BookHeading book_title={book.book_title} />
                        <BookDetail {...book}/>
                    </>
                    
                }
                {!book.id && <p> Something went wrong....</p>}
            </>
        }

        </div>
    )
}
export default Detail;