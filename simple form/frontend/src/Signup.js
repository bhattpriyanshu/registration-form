import React, { useState } from "react";
import axios from "axios"
const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleChange = (event) =>{
    setValues({...values, [event.target.name]:[event.target.value]})
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8080/signup', values)
    .then(res => console.log("Registered Sucessfully"))
    .catch(err => console.log(err));
  }
  console.log(values)
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100">
      <form onSubmit={handleSubmit}>
        <h3 className="p-3">Simple Registration Form</h3>

        <div class="form-group">
          <label for="exampleInputName">Enter your Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            name ='name'
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name='email'
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name='password'
            onChange={handleChange}
          />
        </div>
       
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
