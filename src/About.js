import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {FaFacebook,FaTwitter,FaGoogle} from "react-icons/fa"
import "./about.css";
import girl from "./girl.png"

const About =()=>{
    return(
       <div className="form">
        <h1>Welcome back</h1>
        <div className="image">
        <form>
          <div>
            <label className="email ">your email</label><br/><input className="input" type={'email'} name="email"placeholder="name@domain.com" />      
          </div>
          <div>
            <label className="Password ">your password</label><br/><input className="input" type={'password'} name="email" placeholder="atleast 8 characters"/>     
          </div>
          <div>
          <input type={'checkbox'}/><label className="login ">keep me logged in</label><span className="forgotpass">forgot password?</span>
          </div>
          <button>login</button>
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