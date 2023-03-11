import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar"
import '../Style/AddBook.css'
import Footer from './footer'

const AddBook = () => {

  let [title,setTitle]=useState("")
  let [pageCount,setPageCount]=useState("")
  let [authors,setAuthors]=useState("")
  let [categories,setCategories]=useState("")
  let [thumbnaiUrl,setThumbnailUrl]=useState("")

  let navigate = useNavigate()
  
  let handleSubmit=(e)=>
  {
    e.preventDefault()
    let data = {title,pageCount,authors,categories,thumbnaiUrl}
    fetch("http://localhost:4000/books",{
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    alert ("Book Added Successfully")

    navigate('/BookList')
  }
  

    return ( 
        <div >
          <div className="addBook">
          <div className="head">
            <h1 style={{fontFamily:"cursive",color:"skyblue",textDecoration:"underline"}}>Add Your Books DataBase &#128525;</h1>
          </div>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
            <h1 style={{fontFamily:"cursive",color:"skyblue"}}>Fill Your Form</h1>
                  <div className="title">
                    <label htmlFor="title">Title : </label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title" />
                  </div>
                  <div className="PageCount">
                    <label htmlFor="pagecount">PageCount : </label>
                    <input type="Number" value={pageCount} onChange={(e)=> setPageCount(e.target.value)} placeholder="PageCount" />
                  </div>
                  <div className="Authors">
                    <label htmlFor="athours">Authors : </label>
                    <input type="text" value={authors} onChange={(e)=> setAuthors(e.target.value)} placeholder="Authors Name" />
                  </div>
                  <div className="categories">
                    <label htmlFor="Categories">Categories : </label>
                    <input type="text" value={categories} onChange={(e)=> setCategories(e.target.value)} placeholder="Categories" />
                  </div>
                  <div>
                    <center><textarea name="enter" cols={"20"} rows={"7"} placeholder="Enter Text About Your Books" ></textarea></center>
                  </div>
                  <div className="picture">
                    <label htmlFor="">Image URL: </label>
                    <input type="text" value={thumbnaiUrl} onChange={(e)=> setThumbnailUrl(e.target.value)} placeholder="Url" />
                  </div>
                  <div className="button">
                    <button type="Submit">Submit</button>
                  </div>
            </form>
          </div>
          </div>
       </div>
     );
}
 
export default AddBook;