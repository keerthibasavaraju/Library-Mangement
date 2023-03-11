import { useEffect,useState } from "react";
import '../Style/userlist.css'


const UserList = () => {
  
    let [users,setUsers]=useState([])

    useEffect(()=>
    {
        let fetchData=async()=>
        {
            let response =await fetch('http://localhost:4000/users')
            let data =await response.json()
           
            setUsers(data)
        }
        fetchData()
    })
    
   let deleteUser=(id,firstName)=>
   {
    fetch(`http://localhost:4000/users/${id}`,{
        method:'DELETE'
    })
    alert(`${firstName} has been deleted permanentaly`)
   }


    return ( <div>
<h1>UsersList</h1>
{
    users.map((x)=>
    (
      <div className="details">
        <div className="prof">
            <h1><center>{x.firstName.charAt(0)}</center></h1>
        </div>
        <div className="det">
            <h3>Name: {x.firstName}{x.lastName}</h3>
            <h4>Email: {x.email}</h4>
            <h4>Conatct: {x.contact}</h4>
            <div>
            <button onClick={()=>deleteUser(x.id,x.firstName)}>Delete</button>
            </div>
        </div>
      </div>
    ))
}
    </div> );
}
 
export default UserList;