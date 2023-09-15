import React,{useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/topbar.css';


export default function TopBar() {
  
  return (
    <>
   
    <div className="top">
  
      <div className="topLeft">
      
      </div>
     
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">profile and search bar</div>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
    </>
  );
}