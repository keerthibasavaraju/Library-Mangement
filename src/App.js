import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/navbar'
import Footer from './Components/footer'
import AddUsers from './Components/addUsers'
import AddBook from './Components/addBook'
import BookList from './Components/booklist'
import UserList from './Components/userList'
import Login from './Components/login'
import Admin from './Components/admin'
import ReadBook from './Components/readBook';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route element={<Login/>} path='/'/>
      <Route element={<Admin/>} path='/admin'/> 
      <Route element={<AddUsers/>} path='/addUser' />
      <Route element={<AddBook/>} path='/addBook' />
      <Route element={<BookList/>} path='/BookList' />
      <Route element={<UserList/>}  path='/UserList' />
      <Route element={<ReadBook/>} path='/BookList/:id' />
      <Route/> 
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
