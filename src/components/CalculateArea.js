import React from 'react'
import './CalculateAreaStyle.css'
import { useState } from 'react'
function CalculateArea() {
    const [option, setoption] = useState(0);
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    const [c, setc] = useState(0);
    const [calculation, setcalculation] = useState("value");

    function AreaCalculation(){
        if(option===1){
            const ans= 0.5 * Number(a) * Number(b)
            setcalculation(Math.round(ans * 10000000000) / 10000000000);
        }
        else if(option==2){
            const ans= (Number(a) + Number(b) + Number(c)) / 2;
            ans=Math.sqrt(
                ans *
                  (ans - Number(a)) *
                  Number(ans - Number(b)) *
                  Number(ans - Number(c))
              )
            setcalculation(Math.round(ans * 10000000000) / 10000000000);
        }
        else if (option==3){
            const ans= 0.5 *
            Number(a) *
            Number(b) *
            Math.sin((Number(c) * Math.PI) / 180);
            setcalculation(Math.round(ans * 10000000000) / 10000000000);
        }
    }

    return (
        <div className="component2">

            <div className="maintitle">
                <a href="#FirstPage">
                    <button>Go back to home page</button></a>

                <h1>Calculate Area</h1>
                <h2>Select an option below as per the data you have for a triangle</h2>
            </div>

            <div className="Option">
                <form className="formulaSelectionForm">
                    <div className="choice">
                        <label onClick={e => { setoption(1);setcalculation("value") }} className="label" for="calArea">
                            <input  type="radio" id="calArea" name="areaCalOption" />
                            If you have base and height length  </label>
                    </div>
                    <div className="choice">
                        <label className="label" for="calArea2">
                            <input onClick={e => { setoption(2);setcalculation("value") }} type="radio" id="calArea2" name="areaCalOption" value="areaCalOption2" />
                            If you have length of 3 sides</label>
                    </div>
                    <div className="choice">
                        <label className="label" for="calArea3">
                            <input onClick={e => { setoption(3);setcalculation("value") }} type="radio" id="calArea3" name="areaCalOption" value="areaCalOption3" />
                            If you have length of 2 sides and included angle</label>
                    </div>
                </form>
            </div>

            {
            option === 1 ? ( <div>
            <div className="bg1"></div>
            <form className="contain">
                <div className="input">
                    <div>Base= <input onChange={e=>{seta(e.target.value)}} type="number" placeholder="0" required/></div>
                    <div>Height= <input onChange={e=>{setb(e.target.value)}} type="number" placeholder="0" required/></div>
                </div>
                <button  onClick={AreaCalculation} className="submit">Calculate</button>
            </form>
            <div className="display">
                Area will be calulated here
            </div>  
            <div className="Output">
             "{calculation}"
            </div> 
            <div className="space">
            </div>
            </div>)

            : option === 2 ? (<div>
            <form className="contain">
             <div className="bg2"></div>
               <div className="input">
                    <div>a= <input onChange={e=>{seta(e.target.value)}} type="number" placeholder="0" required/></div>
                    <div>b= <input onChange={e=>{setb(e.target.value)}} type="number" placeholder="0" required/></div>
                    <div>c= <input onChange={e=>{setc(e.target.value)}} type="number" placeholder="0" required/></div>
                </div>
                <button onClick={AreaCalculation} className="submit">Calculate</button>
            </form>
            <div className="display">
                Area will be calulated here
            </div>  
            <div className="Output">
                "{calculation}"
            </div> 
            <div className="space">
            </div> </div>)

            : option === 3 ? (<div>
            <div className="bg3"></div>
            <form className="contain">
               <div className="input">
                    <div>Base= <input onChange={e=>{seta(e.target.value)}} type="number" placeholder="0" required/></div>
                    <div>Hypontenous= <input onChange={e=>{setb(e.target.value)}} type="number" placeholder="0" required/></div>
                </div>
                <div className="input2" >Angle= <input type="number" onChange={e=>{setc(e.target.value)}} placeholder="0" required/></div>
                <button onClick={AreaCalculation} className="submit">Calculate</button>
            </form>
            <div className="display">
                Area will be calulated here
            </div>  
            <div className="Output">
                "{calculation}"
            </div> 
            <div className="space">
            </div> </div>
            ): <div></div>
            }
        </div>
    )
}

export default CalculateArea;
