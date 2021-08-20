import React from 'react'
import './AngleStyle.css'
import { useState } from 'react'


function AnglesOfTriangle() {
    const [firstInput,setfirstInput]= useState(0);
    const [SecondInput,setSecondInput] =useState(0);
    const [ThridInput,setThirdInput] =useState(0);
    const [sumup,setsumup] =useState(0);

    function sum(){
        setsumup( Number(firstInput)+Number(SecondInput)+Number(ThridInput));
    }

    function valueSetting(e){
        if(e.target.id==="1"){
            setfirstInput(e.target.value);
        }
        else if(e.target.id==="2"){
            setSecondInput(e.target.value);
        }
        else{
            setThirdInput(e.target.value);
        }
    }

    return (
        <div className="component2">
            <div className="maintitle">
                <a href="#FirstPage">
                <button>Go back to home page</button></a>

                <h1>Angle of triangle</h1>
                <h2>Enter the angles in below input boxes and we will tell you if those angles make triangle</h2>
            </div>
            <div className="triangleimage"></div>
            <div className="Buttoncontainer">
                <form>
                    <div className="input">
                        <div>x=<input id="1" onChange={valueSetting} type="number" placeholder="0" required /></div>
                        <div>y=<input id="2" onChange={valueSetting} type="number" placeholder="0" required /></div>
                        <div>z=<input id="3" onChange={valueSetting} type="number" placeholder="0" required /></div>
                    </div>
                    <button onClick={sum} className="submit">SUBMIT</button>
                </form>
                
                <div className="OutputSection">{
                        sumup===0?
                        (<div className="Output">Output will be shown here</div>):
                        sumup===180?
                        (<div className="Output">Yuhu! these angles can make a triangle</div>):
                        (<div className="Output">Oops! these angles cannot make a triangle</div>)
                    }
                </div>
            </div>
            <div className="space"></div>
        </div>
    )
}

export default AnglesOfTriangle
