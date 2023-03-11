import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pic from '../images/loginpic.jpg'
import'../Style/login.css'

const Login = () => {

let [email,setEmail] = useState("")
let [password , setPassword]=useState("")

let navigate=useNavigate()

let Submit=(e)=>
{
    e.preventDefault()
    if(email=='admin@gmail.com' && password==112000)
    {
        navigate('/admin')
    }
    else
    {
       navigate("Invalid Credentials!!!!")
    }
}

return ( <div className="login" >

        <div className="logform"  >
              <h2> Login </h2>
              <br />
            <form action="" onSubmit={Submit} style={{textAlign:"left"}}>
                <label htmlFor="Email">Email</label> <br /> 
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />  
                <br /> 
                <br />
                <label htmlFor="Password">Password</label> <br /> 
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} /> 
                <br />
                <br /> 
                <center><button>login</button></center>
            </form>
        </div>
        <div className="pic">
            <img src={Pic} alt="" style={{height:"300px",width:"500px"}} />
        </div>

    </div> );
}
 
export default Login;<div>
</div>