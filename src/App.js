import React from 'react'
import './style.css'
import { useState } from "react";
import LinktoComponent from './LInktoComponent';

function App(){
    const [component,setcomponent]=useState("Check Hypotenuse");
    return(
        <div className="container">
            <div id="FirstPage">
                <h1 className="MainHeading">welcome to world of triangle</h1>
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
                <ul class="footer-list">
                    <li class="list-item"><a target="_blank" href="bhosalesiddhesh9@gmail.com" class="footer-links">
                        <i class="fa fa-envelope" aria-hidden="true"></i></a>
                    </li>
                    <li class="list-item"><a target="_blank" href="https://github.com/Siddheshbhosale">
                        <i class="fab fa-github" aria-hidden="true"></i>
                    </a>
                    </li>
                    <li class="list-item"><a target="_blank" href="https://www.linkedin.com/in/siddheshbhosale">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                    <li class="list-item"><a target="_blank" href="">
                        <i class="fas fa-briefcase"></i>
                    </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default App;