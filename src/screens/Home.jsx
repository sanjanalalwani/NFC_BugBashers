import React from "react";
import "../css/home.css"

export default function Home(){
    return(
        <div className="home">
            <div className="content"><h1>Welcome to <span className="wealth">संपत्ति,</span></h1>
            <p>where we empower individuals with essential financial knowledge. <br />Our mission is to equip individuals and families with the tools they need to achieve lasting financial stability and independence.</p></div>
            <img src="home page image.jpg" alt="" className="doodle" />
            <div className="cards">
                <div className="card">
                    <img src="" alt="" />
                    <h2>MODULES</h2>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <h2>COMMUNITY</h2>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <h2>GAME</h2>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <h2>EXPENSE TRACKER</h2>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <h2>QUIZ</h2>
                </div>
            </div>
{/*1. cards of modules  and all - home page
 1. Modules 2. Expense Tracker 3.Game 4.Community 5.Quiz */}
        </div>
    )
}