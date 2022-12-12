
import './App.css';
import React,{useState} from 'react';
import question from './Components/question';
function App() {
  const[questions,setQuestions]=useState(0)
  const currentquestion=question[questions]
   const setopiton=(ind)=>{
    if(currentquestion.answer===ind){
      alert("currect anser");
      setQuestions(questions+1)
    }
    currentquestion++;
   }


  return (
    <div className="App">
      <div className="container">
        <div className="box1">
          <p>question 1</p>
          <h4>{currentquestion.questioninx}</h4>
        </div>
        <div className="box2">
          <ul>
            {
            currentquestion.option.map((options,i)=>
            {
            return <li><button onClick={()=>setopiton(i)}>{options}</button></li>
            }
            )
            }
          </ul>
        </div>
      </div>
      </div>
  );
}

export default App;
