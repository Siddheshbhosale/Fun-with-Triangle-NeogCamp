import React from 'react'
import './style.css'
import { useState } from "react";
import LinktoComponent from './LInktoComponent';

function App(){
    const [component,setcomponent]=useState("");
    return(
        <div className="container">
            <div id="FirstPage">
                <h1 className="MainHeading">welcome to the world of triangle</h1>
                <div className="Buttoncontainer">
                    <div className="Button">
                    {Object.keys(LinktoComponent).map((value)=>(
                        <a href="#secondPage">
                        <button onClick={()=>(setcomponent(value))
                        }>{value}</button></a>))}
                    </div>
                </div>
            </div>
            <div id="secondPage">
                    {LinktoComponent[component]}
            </div>
            <footer id="footer">
                <ul className="footer-list">
                    <li className="list-item"><a target="_blank" href="bhosalesiddhesh9@gmail.com" className="footer-links">
                        <i className="fa fa-envelope" aria-hidden="true"></i></a>
                    </li>
                    <li className="list-item"><a href="https://github.com/Siddheshbhosale">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                    </li>
                    <li className="list-item"><a href="https://www.linkedin.com/in/siddheshbhosale">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                    <li className="list-item"><a href="https://github.com/Siddheshbhosale" >
                        <i className="fas fa-briefcase"></i>
                    </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default App;