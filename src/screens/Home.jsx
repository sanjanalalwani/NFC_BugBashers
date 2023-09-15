import React from "react";
import "../css/home.css"

export default function Home(){
    return(
        <div className="home">
            <div className="content"><h1>Welcome to <span className="wealth">संपत्ति,</span></h1>
            <p>where financial knowledge meets opportunity. Our platform is dedicated to equipping the underprivileged with essential financial literacy skills. Through interactive modules, personalized guidance, and a supportive community, we empower individuals to take control of their financial future. Join us in building a more financially inclusive world, one step at a time.</p></div>
            <img src="home page image.jpg" alt="" className="doodle" />
            <div className="cards">
                <div className="card">
                    <img src="module icon.png" alt="" /><hr></hr>
                    <h2>MODULES</h2>
                </div>
                <div className="card">
                    <img src="community icon.png" alt="" /><hr></hr>
                    <h2>COMMUNITY</h2>
                </div>
                <div className="card">
                    <img src="" alt="" /><hr></hr>
                    <h2>GAME</h2>
                </div>
                <div className="card">
                    <img src="" alt="" /><hr></hr>
                    <h2>EXPENSE TRACKER</h2>
                </div>
                <div className="card">
                    <img src="" alt="" /><hr></hr>
                    <h2>QUIZ</h2>
                </div>
            </div>
{/*1. cards of modules  and all - home page
 1. Modules 2. Expense Tracker 3.Game 4.Community 5.Quiz */}
        </div>
    )
}