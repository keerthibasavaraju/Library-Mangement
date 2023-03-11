import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


import '../Style/booklist.css'


const BookList = () => {

let [books , setBooks] =useState([])

useEffect(()=>
{
    let fetchData=async()=>
    {
        let response = await fetch("http://localhost:4000/books")
        let data = await response.json()
        setBooks(data)
    }
    fetchData()
})

let deleteBook = (id,title) => 
{
    fetch(`http://localhost:4000/books/${id}`,{
  method:'DELETE'
    })
    alert(`${title} has been Deleted Permanently`)
}
    
    return ( 
        <div className="BookList">
         
        <div className="books-list">
            {
                books.map((x)=>
                (
                   <div className="list">
                     <div className="pic">
                       <img src={x.thumbnailUrl} alt="" />
                       </div>
                      <div>
                      <div className="details">
                        <h1>Title: {x.title}</h1>
                        <h4>Pagecount: {x.pageCount} </h4>
                        <h4>WrittenBy: {x.authors}</h4>
                        <h4>Categories: {x.categories}</h4>
                       </div>
                   <br />
                   <br />
                    <div className="tags">
                        <Link to={`/BookList/${x.id}`} style={{textDecoration:"none",color:"black"}} >Read More</Link>
                        <button onClick={()=>deleteBook(x.id,x.title)}>Delete</button>
                    </div>
                      </div>
                   </div>
                    

                ))
            }
        </div>
        </div>
     );
}
 
export default BookList;