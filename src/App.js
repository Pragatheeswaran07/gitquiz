import './App.css';
import React,{useState} from 'react';
function App() {
  const question=[
    {
      sno:1,
      questioninx:"What is the old name of the php",
      option:["Come to my home","home page","web page","php page"],
      answer:1,
    },
    {
       sno:2,
        questioninx:"Php current version is",
        option:["7.1","9.0","8.0","5.4"],
        answer:2,
  
    },
    {  
        sno:5,
        questioninx:"What is your name?",
        option:["naveen","ajay","vijay","item"],
        answer:3,
      },
      {
        sno:4,
        questioninx:"How many ways can css be written in ",
        option:["one","two","three","four"],
        answer:2,
      },
      {
        sno:5,
        questioninx:"What is the smallest header in Html by default",
        option:["h6","h5","h4","h1"],
        answer:0,
      },
      {
        sno:6,
        questioninx:"React is mainly used for building",
        option:["connectivity","design platform","user interface","database"],
        answer:2,
      },
      {
        sno:5,
        questioninx:"Among echo and print,which is faster",
        option:["print","echo","both","none"],
        answer:2,
      }
     
     
      
        
]
  const[questions,setQuestions]=useState(0)
  const[show,setShow]=useState(1)
  let[result,setResult]=useState(false)
  let currentquestion=question[questions]
   const setoption=(ind)=>{
    if(currentquestion.answer===ind){
      console.log(ind)
      setShow(show+1)
      
    }
   
    const num=questions+1
    
    if(num<question.length){
      setQuestions(questions+1)  
    
    }
    else{
       setResult(true)
    }
   }


  return (
    <div className="App">
      {
        result?<h1>The Score of the quiz is :  <span>{show}</span></h1>:
        <div className="container">
        <div className="box1">
          <p className='p1'>question {currentquestion.sno}</p>
          <h4 className='h4'>{currentquestion.questioninx}</h4>
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
      
      }




      </div>
  );
}

export default App;
