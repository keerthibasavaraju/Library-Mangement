
import { useNavigate } from "react-router-dom";

import '../Style/AddUsers.css'

import { useRef } from "react";

const AddUsers = () => {

    let navigate = useNavigate()
    let firstName = useRef(null)
    let lastName = useRef(null)
    let email = useRef(null)
    let contact = useRef(null)

    let addUser = (e) => {
        e.preventDefault()
        let data =
        {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            contact: contact.current.value
        }

        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        console.log(data);
           alert('Users Added Successfully')
           navigate('/UserList')


    }

    return (
        <div className="adduser">


            <div className="forms">
                <form action="" onSubmit={addUser}>
                    <h1 style={{ fontFamily: "cursive", color: "Dark " }}>Fill Your Form</h1>
                    <div className="name">
                        <label htmlFor="name">FirstName: </label>
                        <input type="text" ref={firstName} required placeholder="FirstName" />
                    </div>
                    <div className="name1">
                        <label htmlFor="name">LastName: </label>
                        <input type="text" ref={lastName} required placeholder="lastName" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email: </label>
                        <input type="email" ref={email} required placeholder="Email" />
                    </div>
                    <div className="contact">
                        <label htmlFor="Phone">Contact: </label>
                        <input type="tel" ref={contact} required placeholder="Mobile Number" />
                    </div>

                    <div className="button">
                        <button type="Submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>


    );
}

export default AddUsers;