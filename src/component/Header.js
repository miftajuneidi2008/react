import React from "react";
import logo from './logo.svg';
import './main.css'
export default function()
{
    return(
        <nav>
            <img src={logo} className="nav-logo" width="40px" />
            <h3>React Fact</h3>
            <h4>React Course Project 1</h4>
        </nav>
    )
}