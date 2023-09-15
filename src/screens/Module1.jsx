import React from "react";
import "../css/module1.css";
import { Link } from 'react-router-dom'; 

export default function Module1(){
    return (
        <div>
        <div className="title"><span>Module 1:</span> <p>Understanding Income and Expenses</p></div>
        <hr className="line"></hr>
        <div className="box">
       <iframe src="https://www.youtube.com/embed/eAUIM4rFEVg?si=A8bJ_NDRjJvEmw9n" frameborder="0" ></iframe></div>
        
        </div>
    )
}