import { useState } from 'react'
import Result from './components/Result.jsx'
import QuestionApiCard from './components/QuestionsApiCard.jsx'
import './App.css'

function App() {
  // const [data, setData] = useState(quizData)
  const [quesCompletion, setQuesCompletion] = useState(false)
  const [ans, setAns] = useState({
                                  correct: 0,
                                  wrong: 0,
                                })
  const [quizData, setQuizData] = useState([]);
  return (
    <>
    <h1 className='title'>Quiz App</h1>
     { quesCompletion ? 
     <Result 
        ans = {ans} 
        quizData = {quizData}
     /> 
     : 
     <QuestionApiCard 
        quizData = {quizData} 
        setQuizData = {setQuizData}
        quesCompletion = {quesCompletion}
        setQuesCompletion = {setQuesCompletion}
        setAns = {setAns}
        ans = {ans}
      />} 
    </>
  )
}

export default App
