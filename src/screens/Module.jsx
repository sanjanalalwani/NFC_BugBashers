import React from "react";
import "../css/module.css";
import { Link } from 'react-router-dom'; 

export default function Module(){
    return(
        <div>
         <div className="mod" style={{width:"300px"}}>
            <Link to="/module" className="nav-link" id="tracker">
                <div className="card">
                    <h2>1. Understanding Income and Expenses</h2>
                    <hr></hr>
                </div>
                </Link>
                <Link to="/community" className="nav-link" id="tracker">
                <div className="card">
                    <h2>COMMUNITY</h2>
                    <hr></hr>
                </div>
                </Link>
                <Link to="/game" className="nav-link" id="tracker">
                <div className="card">
                <h2>GAME</h2>
                    <hr></hr>
                    
                </div>
                </Link>
                <Link to="/expense" className="nav-link" id="tracker">
                <div className="card">
                <h2>EXPENSE TRACKER</h2>
                    <hr></hr>
                
                </div>
              </Link>
              <Link to="/quiz" className="nav-link" id="tracker">
                <div className="card">
                <h2>QUIZ</h2>
                    <hr></hr>
                   
                </div>
                </Link>
            </div></div>
    )
}