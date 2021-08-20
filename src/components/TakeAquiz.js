import React from 'react'
import './TakeAquiz.css'

function TakeAquiz() {

    const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
    
     function Totalscore(){
        // let index=0;
        // for(let entry of form[0]){
        // if(entry[1] == correctAns[index]){
        //     console.log("work");
            
        // }
        // else{
        //     console.log("No work");
        // }
        //     index++;
        // }
    }
    //  {console.log(forms[0])}
    return (
        <div className="component3">
             <div className="maintitle">
                <a href="#FirstPage">
                <button>Go back to home page</button></a>
                <h1>Let's have a Quiz</h1>
             </div>
              
                <form className="formQuiz">

                    <div  class="radio ow">
                        <label class="label question">1. If a triangle has angles 135<sup>0</sup>, 15<sup>0</sup>, 30<sup>0</sup>. Is it an obtuse triangle?</label>
                        
                        <label for="radio1" class="label"><input required type="radio" id="radio1" name="que1" value="option1"/>
                        yes</label>

                        <label for="radio2" class="label"><input required type="radio" id="radio2" name="que1" value="option2"/>
                        no</label>
                    </div>
                    
                    <div class="radio ow">
                        <label class="label question">2. If a triangle has angles 115<sup>0</sup>, 25<sup>0</sup>, 40<sup>0</sup>. Is it an acute triangle?</label>
                        
                        <label for="radio3" class="label"><input required type="radio" id="radio3" name="que2" value="option1"/>
                        yes</label>
                        
                        <label for="radio4" class="label"><input required type="radio" id="radio4" name="que2" value="option2"/>
                        no</label>
                    </div>
                    
                    <div class="radio ow">
                        <label class="label question">3. If a triangle has angles 90<sup>0</sup>, 60<sup>0</sup>, 30<sup>0</sup>. Is it a right angle triangle?</label>
                        
                        <label for="radio5" class="label"><input required type="radio" id="radio5" name="que3" value="option1"/>
                        yes</label>
                        
                        <label for="radio6" class="label"><input required type="radio" id="radio6" name="que3" value="option2"/>
                        no</label>
                    </div>
                    
                    <div class="radio ow">
                        <label class="label question">4. A triangle has angles 60<sup>0</sup>, 60<sup>0</sup>, 60<sup>0</sup>. Is it an equilateral triangle?</label>
                        
                        <label for="radio7" class="label"><input required type="radio" id="radio7" name="que4" value="option1"/>
                        yes</label>
                        
                        <label for="radio8" class="label"><input required type="radio" id="radio8" name="que4" value="option2"/>
                        no</label>
                    </div>

                    <div class="radio ow">
                        <label class="label question">5. If a triangle has angles 25<sup>0</sup>, 75<sup>0</sup>, 80<sup>0</sup>. Is it an acute triangle?</label>
                        
                        <label for="radio9" class="label"><input required type="radio" id="radio9" name="que5" value="option1"/>
                        yes</label>
                        
                        <label for="radio10" class="label"><input required type="radio" id="radio10" name="que5" value="option2"/>
                        no</label>
                    </div>
                    <div class="radio ow">
                        <label class="label question">6. If a triangle has 2 sides with equal lengths and 75<sup>0</sup> angle between them. What is the type of triangle?</label>
                        
                        <label for="radio11" class="label"><input required type="radio" id="radio11" name="que6" value="option1"/>
                        Equilateral</label>
                        
                        <label for="radio12" class="label"><input required type="radio" id="radio12" name="que6" value="option2"/>
                        Isosceles</label>
                        
                        <label for="radio13" class="label"><input required type="radio" id="radio13" name="que6" value="option3"/>
                        Right Angle traingle</label>
                    </div>
                    
                    <div class="radio ow">
                        <label class="label question">7. If a triangle has 2 angles of 75<sup>0</sup>. What is the measure of third angle in degree?</label>
                        
                        <label for="radio14" class="label"><input required type="radio" id="radio14" name="que7" value="option1"/>
                        25</label>
                        
                        <label for="radio15" class="label"><input required type="radio" id="radio15" name="que7" value="option2"/>
                        30</label>
                        
                        <label for="radio16" class="label"><input required type="radio" id="radio16" name="que7" value="option3"/>
                        15</label>
                    </div>
                    <div class="radio ow">
                        <label class="label question">8. If a triangle has 2 sides with equal lengths and 60<sup>0</sup> angle between them. What is the type of triangle?</label>
                        
                        <label for="radio17" class="label"><input required type="radio" id="radio17" name="que8" value="option1"/>
                        Equilateral</label>
                        
                        <label for="radio18" class="label"><input required type="radio" id="radio18" name="que8" value="option2"/>
                        Isosceles</label>
                        
                        <label for="radio19" class="label"><input required type="radio" id="radio19" name="que8" value="option3"/>
                        Both</label>
                    </div>
                    
                    <div class="radio ow">
                        <label class="label question">9. The perimeter of an equilateral triangle is 15cm. What is the length of one side?</label>
                        
                        <label for="radio20" class="label"><input required type="radio" id="radio20" name="que9" value="option1"/>
                        15cm</label>
                        
                        <label for="radio21" class="label"><input required type="radio" id="radio21" name="que9" value="option2"/>
                        45cm</label>
                        
                        <label for="radio22" class="label"><input required type="radio" id="radio22" name="que9" value="option3"/>
                        5cm</label>
                    </div>

                    <div className="radio ow">
                        <label className="label question">10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?</label>
                        
                        <label for="radio23" class="label"><input required type="radio" id="radio23" name="que10" value="option1"/>
                        Equilateral</label>
                        
                        <label for="radio24" class="label"><input required type="radio" id="radio24" name="que10" value="option2"/>
                        Isosceles</label>
                        
                        <label for="radio25" class="label"><input required type="radio" id="radio25" name="que10" value="option3"/>
                        Scalene</label>
                    </div>
                    <button onClick={e=>{Totalscore()}} className="submit" id="submitQuiz">Submit</button>
                    <h2 className="maintitle">Score will be shown here-</h2>

                    <div className="Output">
                        <label className="label">Score:</label>
                        <div style={{display:"inline"}} className="score"> For each correct answer you will get 1 point</div>
                    </div>
                    <div className="space"></div>

                </form>
        </div>
    )
}

export default TakeAquiz;
