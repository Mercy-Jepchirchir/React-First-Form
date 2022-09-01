import React from "react";
import './navbar.css'
import { useState,useEffect } from 'react';

const Navbar =()=>{
    return(
        <div className="nav">
            <span><b>EddieShop</b></span>
            <span className="signup">Don't have an account? <b>Sign up</b></span>
        </div>
    )
};

export default Navbar;

