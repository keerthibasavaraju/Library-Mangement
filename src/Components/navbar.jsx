import { Link } from "react-router-dom";
import '../Style/navbar.css'
import logo from '../images/logo.jpeg'

const NavBar = () => {
    return ( 
        <div className="NavBar">
        <div className="log">
            <img src={logo} alt="" />
        </div>
        <div className="links">
            <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/BookList">BookList</Link></li>
                <li><Link to="/UserList">UserList</Link></li>
                <li><Link to="/AddBook">AddBook</Link></li>
                <li><Link to="/AddUser">AddUser</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
        </div>
     );
}
 
export default NavBar;
