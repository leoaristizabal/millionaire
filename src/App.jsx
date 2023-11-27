import { useState, useEffect, useMemo } from "react";
import "./App.css"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  
  const data = [
    {
      id:1,
      question: "Que dia es mi cumpleanos?",
      answers:[
        {
          text: "17 Marzo",
          correct: false,
        },
        {
          text: "28 Mayo",
          correct: false,
        },
        {
          text: "28 Abril",
          correct: true,
        },
        {
          text: "05 Noviembre",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  
  
  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 1500"},
      {id:7, amount:"$ 2000"},
      {id:8, amount:"$ 2500"},
      {id:9, amount:"$ 3500"},
      {id:10, amount:"$ 4500"},
      {id:11, amount:"$ 5500"},
      {id:12, amount:"$ 6000"},
      {id:13, amount:"$ 7500"},
      {id:14, amount:"$ 9000"},
      {id:15, amount:"$ 20000"},
    ].reverse(),

   []);
  

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="App">
      <div className="main">

      {stop ? (
        
        <h1 className="endText">Te has ganao: {earned} </h1> 
        ) : (
          <>
                
            <div className="top">
              <div className="timer">
              <Timer setStop = {setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
            
            <Trivia 
            data={data} 
            setStop={setStop} 
            questionNumber = {questionNumber} 
            setQuestionNumber = {setQuestionNumber}/>

            </div>
         </> 
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (

            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>

          ))}


        </ul>
      </div>

    </div>
  );
}

export default App;
