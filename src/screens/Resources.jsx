import React from "react";
import "../css/resources.css";
import { Link } from 'react-router-dom'; 

export default function Resources(){
    return(
<div className="boxy">
        <div className="head">RESOURCES-OFFLINE</div>
    <div className="dabba1">
        <a href="">
        <div className="rcard">
            <img src="axis logo.png" alt="" />
        <h2>Axis Bank </h2>
            <hr></hr>

        </div>
        </a>
        <a href="">
        <div className="rcard">
            <img src="hdfc logo.png" alt="" />
        <h2>HDFC Bank</h2>
            <hr></hr>
            
        </div>
        </a>
        <a href="">
        <div className="rcard">
            <img src="icici logo.png" alt="" />
        <h2>ICICI Bank</h2>
            <hr></hr>
            
        </div>
        </a>
        <a href="">
        <div className="rcard">
            <img src="kotak logo.png" alt="" id="kotak"/>
        <h2>Kotak Mahindra Bank</h2>
            <hr></hr>
            
        </div>
        </a>
    </div>

    <div className="head">RESOURCES-ONLINE</div>
    <div className="dabba1">
        <a href="">
        <div className="rcard">
            <img src="new community icon.png" alt="" />
        <h2>NEFT</h2>
            <hr></hr>
            
        </div>
        </a>
        <a href="">
        <div className="rcard">
            <img src="new community icon.png" alt="" />
        <h2>Mutual Funds</h2>
            <hr></hr>
            
        </div>
        </a>
        <a href="">
        <div className="rcard">
            <img src="new community icon.png" alt="" />
        <h2>Cryptocurrency</h2>
            <hr></hr>
        </div>
        </a>
        <a href="">
        <div className="rcard">
            <img src="new community icon.png" alt="" />
        <h2>Mobile Wallets</h2>
            <hr></hr>
        </div>
        </a>
    </div>
    </div>
    )
}