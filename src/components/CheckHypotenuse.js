import React from 'react'
import { useState } from 'react';
import './CheckHypotenusea.css'

function CheckHypotenuse() {
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [c, setc] = useState(0);
    const [calculation, setcalculation] = useState("value");

    function AreaCalculation(){
        const ans =Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
        setcalculation(Math.round(ans * 100000) / 100000);
    }

    return (
        <div className="component2">
             <div className="maintitle">
                <a href="#FirstPage">
                    <button>Go back to home page</button></a>

                <h1>Check hypotenuse</h1>
                <h2>Enter the lengths of sides of right angle triangle</h2>
            </div>
            <div className="bghypotenuse">
            </div>
            <form className="contain">
                <div className="input">
                    <div>Base= <input onChange={e=>{seta(e.target.value)}} type="number" placeholder="0" required/></div>
                    <div>Height= <input onChange={e=>{setb(e.target.value)}} type="number" placeholder="0" required/></div>
                </div>
                <button  onClick={AreaCalculation} className="submit">Calculate</button>
            </form>
            <div className="display">
            Hypotenuse will be calculated here-
            </div>  
            <div className="Output">
             "{calculation}"
            </div> 
            <div className="space">
            </div>

        </div>
    )
}

export default CheckHypotenuse;
