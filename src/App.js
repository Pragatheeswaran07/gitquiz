import './App.css';
import React,{useState} from 'react';
function App() {
  const question=[
    {
      questioninx:"What is the old name of the php",
      option:["Come to my home","home page","web page","php page"],
      answer:1,
    },
    {
       
        questioninx:"Php current version is",
        option:["7.1","9.0","8.0","5.4"],
        answer:2,
  
    },
    {
        questioninx:"What is your name",
        option:["naveen","ajay","vijay","fck**"],
        answer:0,
      },
      {
        questioninx:"Rating for this quiz game ",
        option:["one","two","three","four"],
        answer:1,
      }
        
]




  const[questions,setQuestions]=useState(0)
  let currentquestion=question[questions]
   const setoption=(ind)=>{
    if(currentquestion.answer===ind){
      console.log(ind)
      alert("currect anser");
      
    }
    setQuestions(questions+1)
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
            return <li><button onClick={()=>setoption(i)}>{options}</button></li>
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
