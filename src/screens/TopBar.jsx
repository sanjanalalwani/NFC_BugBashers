import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/topbar.css';

export default function TopBar() {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <img src="logo.jpeg" alt="" className="icon" />
          <a href='/home'>संपत्ति</a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/home" className="nav-link active" aria-current="page">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <a href="http://127.0.0.1:8000/login/">
                LOGIN
                </a>
            </li>
           
          </ul>
        </div>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </>
  );
}
