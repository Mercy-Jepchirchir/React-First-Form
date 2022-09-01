import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {FaFacebook,FaTwitter,FaGoogle} from "react-icons/fa"
import "./about.css";
import girl from "./girl.png"


const About =()=>{
  const [email,setEmail]= useState("");
  console.log(email)
  const [password,setPassword]= useState("");

  const handleSubmit = ()=>{
    const data = {
      email: email,
      password : password,
    }
    alert(data)
  }

    return(
       <div className="form">
        <h1>Welcome back</h1>
        <div className="image">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="email ">your email</label><br/><input className="input" type={'email'} name="email"placeholder="name@domain.com" 
            onChange={(e)=>{setEmail(e.target.value)}}
            />      
          </div>
          <div>
            <label className="Password ">your password</label><br/><input className="input" type={'password'} name="email" placeholder="atleast 8 characters"
            onChange={(e)=>{setPassword(e.target.value)}}
            />     
          </div>
          <div>
          <input type={'checkbox'}/><label className="login ">keep me logged in</label><span className="forgotpass">forgot password?</span>
          </div>
          <button type="submit">login</button>
          <div className="or">
            <hr/><span>or</span><hr/>
          </div>
          <div className="icons">
          < FaFacebook /> 
          < FaTwitter />
          < FaGoogle />

        </div>

        </form>
        <img className="girl" src= {girl}/>
        </div>
        
       </div>
    )
};

export default About;