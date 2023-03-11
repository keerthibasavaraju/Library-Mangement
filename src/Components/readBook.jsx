import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Style/readbook.css'


const ReadBook = () => {

    let [book , setBook] =useState([])

    let params=useParams()

    useEffect(()=>
    {
        let fetchData=async()=>
        {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            console.log(data);
            setBook(data)
        }
        fetchData()
    })

    return ( 
    <div className="main">
        <div className="pic">
            <img src={book.thumbnailUrl} alt="" />
        </div>
        <div className="details">
            <h1>Title: {book.title}</h1>
            <h4>Authors: {book.Authors}</h4>
            <p>SD: {book.ShortDescription}</p>
            <p>LD: {book.longDescription}</p>
        </div>

    </div> );
}
 
export default ReadBook;