import React from 'react'
import './TakeAquiz.css'
import {useForm} from 'react-hook-form'
import { useState } from 'react';

function TakeAquiz() {

    const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
    const [score,setscore] = useState(0)
    const { register, handleSubmit, errors}= useForm();
    var correct=0,index=0;

    const onSubmit = (data) => {
      Object.values(data).map((value)=>{
        if(value ===correctAns[index]){
          correct++;
        }
        index++;
        })
    setscore(correct);
    }

    return (
        <div className="component3">
             <div className="maintitle">
                <a href="#FirstPage">
                <button>Go back to home page</button></a>
                <h1>Let's have a Quiz</h1>
                <h2>For each correct answer you will get +1 point</h2>
             </div>
            <form onSubmit={handleSubmit(onSubmit)} className="formQuiz">

                <div  className="radio ow">
                    <label className="label question">1. If a triangle has angles 135<sup>0</sup>, 15<sup>0</sup>, 30<sup>0</sup>. Is it an obtuse triangle?</label>
                    
                    <label htmlFor="radio1" className="label"><input required type="radio" id="radio1" name="que1" value="option1" {...register('que1')}/>
                    yes</label>

                    <label htmlFor="radio2" className="label"><input required type="radio" id="radio2" name="que1" value="option2" {...register('que1')}/>
                    no</label>
                </div>
                
                <div className="radio ow">
                    <label className="label question">2. If a triangle has angles 115<sup>0</sup>, 25<sup>0</sup>, 40<sup>0</sup>. Is it an acute triangle?</label>
                    
                    <label htmlFor="radio3" className="label"><input required type="radio" id="radio3" name="que2" value="option1" {...register('que2')}/>
                    yes</label>
                    
                    <label htmlFor="radio4" className="label"><input required type="radio" id="radio4" name="que2" value="option2"{...register('que2')}/>
                    no</label>
                </div>
                
                 <div className="radio ow">
                    <label className="label question">3. If a triangle has angles 90<sup>0</sup>, 60<sup>0</sup>, 30<sup>0</sup>. Is it a right angle triangle?</label>
                    
                    <label htmlFor="radio5" className="label"><input required type="radio" id="radio5" name="que3" value="option1"{...register('que3')}/>
                    yes</label>
                    
                    <label htmlFor="radio6" className="label"><input required type="radio" id="radio6" name="que3" value="option2"{...register('que3')}/>
                    no</label>
                </div>
                
                <div className="radio ow">
                    <label className="label question">4. A triangle has angles 60<sup>0</sup>, 60<sup>0</sup>, 60<sup>0</sup>. Is it an equilateral triangle?</label>
                    
                    <label htmlFor="radio7" className="label"><input required type="radio" id="radio7" name="que4" value="option1" {...register('que4')}/>
                    yes</label>
                    
                    <label htmlFor="radio8" className="label"><input required type="radio" id="radio8" name="que4" value="option2" {...register('que4')}/>
                    no</label>
                </div>

                <div className="radio ow">
                    <label className="label question">5. If a triangle has angles 25<sup>0</sup>, 75<sup>0</sup>, 80<sup>0</sup>. Is it an acute triangle?</label>
                    
                    <label htmlFor="radio9" className="label"><input required type="radio" id="radio9" name="que5" value="option1" {...register('que5')}/>
                    yes</label>
                    
                    <label htmlFor="radio10" className="label"><input required type="radio" id="radio10" name="que5" value="option2" {...register('que5')}/>
                    no</label>
                </div>
                <div className="radio ow">
                    <label className="label question">6. If a triangle has 2 sides with equal lengths and 75<sup>0</sup> angle between them. What is the type of triangle?</label>
                    
                    <label htmlFor="radio11" className="label"><input required type="radio" id="radio11" name="que6" value="option1" {...register('que6')}/>
                    Equilateral</label>
                    
                    <label htmlFor="radio12" className="label"><input required type="radio" id="radio12" name="que6" value="option2" {...register('que6')}/>
                    Isosceles</label>
                    
                    <label htmlFor="radio13" className="label"><input required type="radio" id="radio13" name="que6" value="option3" {...register('que6')}/>
                    Right Angle traingle</label>
                </div>
                
                <div className="radio ow">
                    <label className="label question">7. If a triangle has 2 angles of 75<sup>0</sup>. What is the measure of third angle in degree?</label>
                    
                    <label htmlFor="radio14" className="label"><input required type="radio" id="radio14" name="que7" value="option1" {...register('que7')}/>
                    25</label>
                    
                    <label htmlFor="radio15" className="label"><input required type="radio" id="radio15" name="que7" value="option2" {...register('que7')}/>
                    30</label>
                    
                    <label htmlFor="radio16" className="label"><input required type="radio" id="radio16" name="que7" value="option3" {...register('que7')}/>
                    15</label>
                </div>
                <div className="radio ow">
                    <label className="label question">8. If a triangle has 2 sides with equal lengths and 60<sup>0</sup> angle between them. What is the type of triangle?</label>
                    
                    <label htmlFor="radio17" className="label"><input required type="radio" id="radio17" name="que8" value="option1" {...register('que8')}/>
                    Equilateral</label>
                    
                    <label htmlFor="radio18" className="label"><input required type="radio" id="radio18" name="que8" value="option2" {...register('que8')}/>
                    Isosceles</label>
                    
                    <label htmlFor="radio19" className="label"><input required type="radio" id="radio19" name="que8" value="option3" {...register('que8')}/>
                    Both</label>
                </div>
                
                <div className="radio ow">
                    <label className="label question">9. The perimeter of an equilateral triangle is 15cm. What is the length of one side?</label>
                    
                    <label htmlFor="radio20" className="label"><input required type="radio" id="radio20" name="que9" value="option1" {...register('que9')}/>
                    15cm</label>
                    
                    <label htmlFor="radio21" className="label"><input required type="radio" id="radio21" name="que9" value="option2" {...register('que9')}/>
                    45cm</label>
                    
                    <label htmlFor="radio22" className="label"><input required type="radio" id="radio22" name="que9" value="option3" {...register('que9')}/>
                    5cm</label>
                </div>

                <div className="radio ow">
                    <label className="label question">10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?</label>
                    
                    <label htmlFor="radio23" className="label"><input required type="radio" id="radio23" name="que10" value="option1" {...register('que10')}/>
                    Equilateral</label>
                    
                    <label htmlFor="radio24" className="label"><input required type="radio" id="radio24" name="que10" value="option2" {...register('que10')}/>
                    Isosceles</label>
                    
                    <label htmlFor="radio25" className="label"><input required type="radio" id="radio25" name="que10" value="option3" {...register('que10')}/>
                    Scalene</label>
                </div>

                <button className="submit" id="submitQuiz">Submit</button>
                <h2 className="maintitle">Score will be shown here-</h2>

                <div className="Output">
                    {
                     score!==0?(<label className="label">Score:{score}</label>):(
                    <div style={{display:"inline"}} className="score">"Click submit to Know your score"</div>)
                    }   
                </div>
                <div className="space"></div>

            </form>
        </div>
    )
}

export default TakeAquiz;
