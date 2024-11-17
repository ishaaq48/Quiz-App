import { useEffect, useState } from 'react'
import '../App.css'
import { quizData } from '../data'
export default function QuestionsCard(props){
    const {setQuesCompletion, setAns, data,ans} = props
    const [queIndex, setQueIndex] = useState(0)
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
            if(queIndex < quizData.length - 1)
            {
                setQueIndex(prev => prev+1)
                setTimer(30)
            }
            if(queIndex ===  quizData.length - 1){
                setQuesCompletion(true)
            }
         }


    function handleAns(option){

        if(data[queIndex][option] === data[queIndex].answer)
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
        
        if(queIndex+1 === data.length)
        {
            setQuesCompletion(true)
        }else{
            setQueIndex(queIndex+1)
            setTimer(30)
        }

    }

    const progressWidth = (timer / 30) * 100;
    return (
        <div className="question-card">
            <div className='title-question'>
                <h1>Quiz App</h1>
                <div style={{ width: "100%", background: "#ddd", borderRadius: "8px", overflow: "hidden", height: "20px" }}>
                <div
                style={{
                    width: `${progressWidth}%`,
                    background: progressWidth > 50 ? "#4caf50" : progressWidth > 20 ? "#ff9800" : "#f44336",
                    height: "100%",
                    transition: "width 0.5s ease",
                }}
                ></div>
                </div>
                <h3>{queIndex+1}. {data[queIndex].question}</h3>
            </div>
            
            <button className='options' onClick={ ()=> handleAns("a")}>{data[queIndex].a}</button>   
            <button className='options' onClick={ ()=> handleAns("b")}>{data[queIndex].b}</button>   
            <button className='options' onClick={ ()=> handleAns("c")}>{data[queIndex].c}</button>   
            <button className='options' onClick={ ()=> handleAns("d")}>{data[queIndex].d}</button>   
        
            <button className='next-question' onClick={handleQueIndex}>Next Question</button>
        </div>
    )
}