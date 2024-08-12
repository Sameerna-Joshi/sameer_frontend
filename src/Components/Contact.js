import React, { useState } from 'react'
import UserService from '../service/UserService';



function Contact() {
  const [user, setUser] = useState({
    phoneNumber: "",
    userName: "",
    suggestion: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const [message,newmessage]= useState("");
  const UserRegister = (e) => {
    e.preventDefault();
    console.log(user);
    UserService.saveuser(user).then((res)=>{
     newmessage("Thanks for feedback");
     setUser({
      phoneNumber: "",
      userName: "",
      suggestion: "",
     })

    }).catch((error)=>{
      console.log(error);
    })
  };

  
  return (
    <>
      <div id="message">
        <h3>HELP ME TO IMPROVE</h3>
      </div>
      {
        message &&
        <p className="fs-4 text-center text-success">{message}</p>
      }
      <form onSubmit={UserRegister}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Enter Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={user.userName} required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Enter contact number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber" required
            value={user.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="suggestion" className="form-label">Please provide your valuable feedback</label>
          <input
            type="text"
            className="form-control"
            id="suggestion"
            name="suggestion" required
            value={user.suggestion}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default Contact;


