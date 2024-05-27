import React, { useEffect, useState } from "react";
import '../Form.css'
const Form = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    const passChange=(e)=>{
        setPassword(e.target.value)
    }
    const validateForm=(e)=>{
        e.preventDefault()
        if(email=='admin@gmail.com' && password=="admin@123"){
            console.log("Login Successful");
        }else{
            console.log("Incorrect Credentials");
        }
        console.log(email,password);
        setEmail('')
        setPassword('')
    }

    useEffect(()=>{
      return()=>{
        console.log('Form component unmounted');
      }
    })

  return (
    <>
    <h1 className='text-center mt-5 mb-5'> Form Component</h1>
    <div className="form d-flex justify-content-center ">
      <form className="border border-secondary p-4 rounded-3" onSubmit={validateForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={emailChange}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={passChange}
            value={password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Form;
