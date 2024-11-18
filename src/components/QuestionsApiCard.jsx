import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function QuestionApiCard({selectCategory,quizData, setQuizData,quesCompletion,setQuesCompletion, setAns, ans}){
  const [quesIndex,setQuesIndex] = useState(0)
    
  const [timer, setTimer] = useState(30) 
  
  useEffect(() =>{
      if(timer === 0) {
          moveToNextQuestion()
          return
      }
       const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)

    return () => clearInterval(interval)
       }, [timer])

       const moveToNextQuestion = () =>{
          if(quesIndex < quizData.length - 1)
          {
              setQuesIndex(prev => prev+1)
              setTimer(30)
          }
          if(quesIndex ===  quizData.length - 1){
              setQuesCompletion(true)
          }
       }
    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${selectCategory}&difficulty=easy&type=multiple`)
          .then((response) => response.json())
          .then((data) => {
            const formattedData = data.results.map((item) => ({
              question: item.question,
              a: item.incorrect_answers[0],
              b: item.incorrect_answers[1],
              c: item.incorrect_answers[2],
              d: item.correct_answer,
              answer: item.correct_answer,
            }));
            setQuizData(formattedData);
          });
      }, [setQuizData]);
      
      function handleAns(option){

        if(quizData[quesIndex][option] === quizData[quesIndex].answer)
        {
            setAns((prevAns) => ({
                ...prevAns,
                correct: prevAns.correct + 1
            }))
            
        }else{
            setAns((prevAns) => ({
                ...prevAns,
                wrong: prevAns.wrong + 1
            }))
            
        }
        console.log("Correct" , ans.correct)
        console.log("Wrong",ans.wrong)
    }

      function handleQueIndex(){
        
        if(quesIndex+1 === quizData.length)
        {
            setQuesCompletion(true)
        }else{
            setQuesIndex(quesIndex+1)
            setTimer(30)
        }

    }
    const progressWidth = (timer / 30) * 100;
    return (
        <div className="question-card">
    
          {quizData.length > 0 ? (
            <div>
              <h3 className="title-question">Q{quesIndex + 1}: {quizData[quesIndex].question}</h3>
              <div style={{ width: "100%", background: "#ddd", borderRadius: "8px", overflow: "hidden", height: "20px", margin:"10px" }}>
                <div
                style={{
                    width: `${progressWidth}%`,
                    background: progressWidth > 50 ? "#4caf50" : progressWidth > 20 ? "#ff9800" : "#f44336",
                    height: "100%",
                    transition: "width 0.5s ease",
                }}
                ></div>
                </div>
              <div>
                <button className='options' onClick={ ()=> handleAns("a")}>{quizData[quesIndex].a}</button>
                <button className='options' onClick={ ()=> handleAns("b")}>{quizData[quesIndex].b}</button>
                <button className='options' onClick={ ()=> handleAns("c")}>{quizData[quesIndex].c}</button>
                <button className='options' onClick={ ()=> handleAns("d")}>{quizData[quesIndex].d}</button>
              </div>
            </div>
              ) : (
                <p>Loading questions...</p>
              )}
              {quesCompletion ? <button className='next-question'><Link to="/result">Result</Link></button> : <button className='next-question' onClick={handleQueIndex}>Next Question</button>}
          </div>
    )
}